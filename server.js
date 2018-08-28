const path = require('path');
const request = require('request');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev');
const compiler = webpack(config);

const successObj = {
    success: true,
    message: "success"
};
const errorObj = {
    success: false,
    message: "Internal Server Error"
}

function _generateList(issue) {
    const { login: user, url: userUrl } = issue.user;
    const {
        url,
        number: issueId,
        repository_url: repoUrl,
        title,
        state: status,
        comments: commentCount,
        created_at,
        updated_at,
        body: desc
    } = issue;
    return {
        url,
        routeUrl: `/issues/${issueId}`,
        issueId,
        repoUrl,
        user,
        userUrl,
        title,
        status,
        iconClass: `icon-${status}`,
        commentCount,
        created: (new Date(created_at)).toLocaleString(),
        updated: (new Date(updated_at)).toLocaleString(),
        desc
    };
}

function _getIssues(err, resp, body, req, res) {
    if (!err && resp.statusCode === 200) {
        try {
            const rawData = JSON.parse(body);
            const { page: currentPage, user: username, repo: repository } = req.params;
            const {
                total_count: total,
                items
            } = rawData;
            res.json(Object.assign(successObj, {
                total: +total,
                pages: Math.ceil((+total) / 20),
                currentPage,
                username,
                repository,
                list: items.map(_generateList)
            }));
        } catch (e) {
            res.status(500);
            res.json(errorObj);
        }
    } else {
        res.status(500);
        res.json(errorObj);
    }
}

function _getDetail(issueUri, err, resp, body, req, res) {
    if (!err && resp.statusCode === 200) {
        try {
            const rawData = JSON.parse(body);
            const { login: userId } = rawData.user;
            const { user: username, repo: repository, issueId } = req.params;
            const {
                title,
                state: status,
                comments: commentCount,
                body: desc,
                created_at: created,
                updated_at: updated
            } = rawData;
            let comments = [];
            // Fetch comments
            request({
                uri: `${issueUri}/comments`,
                headers: {
                    "User-Agent": "scssyworks"
                }
            }, (err, resp2, body2) => {
                if (!err && resp2.statusCode === 200) {
                    try {
                        const rawData = JSON.parse(body2);
                        comments = rawData.map((comment) => {
                            const { login: userId } = comment.user;
                            const { created_at: created, updated_at: updated, body: desc } = comment;
                            return {
                                def: false,
                                created: (new Date(created)).toLocaleString(),
                                updated: (new Date(updated)).toLocaleString(),
                                userId,
                                desc
                            }
                        });
                        comments = [{
                            def: true,
                            created: (new Date(created)).toLocaleString(),
                            updated: (new Date(updated)).toLocaleString(),
                            userId,
                            desc
                        }, ...comments];
                        res.json(Object.assign(successObj, {
                            username,
                            repository,
                            issueId,
                            title,
                            status,
                            commentCount,
                            comments
                        }));
                    } catch (e) {
                        res.json(errorObj);
                    }
                } else {
                    res.json(errorObj);
                }
            });
        } catch (e) {
            res.json(errorObj);
        }
    } else {
        res.json(errorObj);
    }
}

app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.set("json spaces", 2);

const GITHUB_URL = "https://api.github.com"; // ?q=repo:Microsoft/vscode+type:issue&per_page=20;

app.get("/issues/:user/:repo/:page", function (req, res) {
    const { user, repo, page } = req.params;
    request({
        uri: `${GITHUB_URL}/search/issues?q=repo:${user}/${repo}+type:issue&per_page=20&sort=created&order=desc&page=${page}`,
        headers: {
            "User-Agent": "scssyworks"
        }
    }, (err, resp, body) => {
        _getIssues(err, resp, body, req, res);
    });
});

app.get("/issues/detail/:user/:repo/:issueId", function (req, res) {
    const { user, repo, issueId } = req.params;
    const issueUri = `${GITHUB_URL}/repos/${user}/${repo}/issues/${issueId}`;
    request({
        uri: issueUri,
        headers: {
            "User-Agent": "scssyworks"
        }
    }, function (err, resp, body) {
        _getDetail(issueUri, err, resp, body, req, res);
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8800, () => console.log('Listening at port 8800'));