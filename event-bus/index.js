const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.listen(4005, () => {
    console.log('Listening on port 4005')
})