const FormData = require('form-data');
const fetch = require("node-fetch");

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser')

var path = require('path')
const express = require('express')

const app = express()
app.use(express.static('dist'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})


const apiKey = process.env.API_KEY;
const endpoint = "https://api.meaningcloud.com/sentiment-2.1?";

const sentiment = async(req, res) => {
    console.log("in post")
    console.log(req.body)
    const url = req.body.urlText;
    console.log(url)
    const response = await fetch(`${endpoint}key=${apiKey}&url=${url}&lang=en`)
    try {
        const data = await response.json();
        console.log(data)
        res.send(data);
        console.log("data send")
    } catch (e) {
        console.log("error:", error)
    }
}

app.post("/api", sentiment);


function callBack(req, res) {
    res.send('POST received');
}