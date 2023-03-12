const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();
const cors = require('cors');
const posts = {};

app.use(bodyParser.json());
app.use(cors());
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    console.log("request", req)
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = { id, title };
    res.status(201).send(posts[id])
});

app.listen(4000, () => {
    console.log('v22')
    console.log("Posts service started on port 4000");
})