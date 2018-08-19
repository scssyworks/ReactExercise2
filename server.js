const path = require('path');
const request = require('request');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev');
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.set("json spaces", 2);

const GITHUB_URL = "https://api.github.com/search/issues"; // ?q=repo:Microsoft/vscode+type:issue&per_page=20;

app.get("/issues/:user/:repo/:page", function (req, res) {
    request({
        uri: `${GITHUB_URL}?q=repo:${req.params.user}/${req.params.repo}+type:issue&per_page=20&sort=created&order=desc&page=${req.params.page}`,
        headers: {
            "User-Agent": "scssyworks"
        }
    }, function (err, resp, body) {
        if (!err && resp.statusCode === 200) {
            try {
                const rawData = JSON.parse(body);
                const postData = {};
                postData.total = rawData.total_count;
                postData.pages = Math.ceil((+postData.total) / 20);
                postData.currentPage = req.params.page;
                postData.user = req.params.user;
                postData.repository = req.params.repo;
                postData.list = rawData.items.map((issue) => {
                    const issueObj = {};
                    const { login, url } = issue.user;
                    issueObj.url = issue.url;
                    issueObj.routeUrl = `/issues/${issue.number}`;
                    issueObj.issueId = issue.number;
                    issueObj.repoUrl = issue.repository_url;
                    issueObj.user = login;
                    issueObj.userUrl = url;
                    issueObj.title = issue.title;
                    issueObj.status = issue.state;
                    issueObj.iconClass = `icon-${issue.state}`;
                    issueObj.commentCount = issue.comments;
                    issueObj.created = (new Date(issue.created_at)).toLocaleString();
                    issueObj.updated = (new Date(issue.updated_at)).toLocaleString();
                    issueObj.desc = issue.body;
                    return issueObj;
                });
                res.json(postData);
            } catch (e) {
                res.status(500);
                res.json('Internal Server Error');
            }
        } else {
            res.status(500);
            res.json('Internal Server Error');
        }
    })
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8800, () => console.log('Listening at port 8800'));