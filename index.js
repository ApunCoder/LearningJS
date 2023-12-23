require('dotenv').config()
const express = require('express');

const app = express();

const userData = {
    "login": "codingwithnikk",
    "id": 112265190,
    "node_id": "U_kgDOBrEH5g",
    "avatar_url": "https://avatars.githubusercontent.com/u/112265190?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/codingwithnikk",
    "html_url": "https://github.com/codingwithnikk",
    "followers_url": "https://api.github.com/users/codingwithnikk/followers",
    "following_url": "https://api.github.com/users/codingwithnikk/following{/other_user}",
    "gists_url": "https://api.github.com/users/codingwithnikk/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/codingwithnikk/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/codingwithnikk/subscriptions",
    "organizations_url": "https://api.github.com/users/codingwithnikk/orgs",
    "repos_url": "https://api.github.com/users/codingwithnikk/repos",
    "events_url": "https://api.github.com/users/codingwithnikk/events{/privacy}",
    "received_events_url": "https://api.github.com/users/codingwithnikk/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Nikhil",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I am an enthusiastic and dedicated student pursuing my passion for computer science. With a strong interest in web development.",
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 0,
    "following": 4,
    "created_at": "2022-08-27T15:16:41Z",
    "updated_at": "2023-12-23T09:16:34Z"
  };

app.get('/', (req, res) => {
    res.send("Hello New Server!!");
});

app.get('/twitter', (req, res) => {
    res.send("Hello Twitter!!");
});

app.get('/User', (req, res) => {
    res.send(`<h1>Hello Nikhil!</h1>`);
});

app.get('/user/data', (req, res) => {
    res.json(userData);
});

app.listen(process.env.PORT, () => {
    console.log(`App is Running on Port ${process.env.PORT}`);
});
