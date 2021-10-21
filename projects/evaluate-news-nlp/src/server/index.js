const FormData = require('form-data');
const fetch = require("node-fetch");

const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


const textApi = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";

const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("url", "https://edition.cnn.com/");
formdata.append("lang", "en"); // 2-letter code, like en es fr ...

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};
const response = fetch(baseURL, requestOptions)
    .then(response => ({
        status: response.status,
        body: response.json()
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch(error => console.log('error', error));