const books = require('./books');
const youtube = require('./youtube');
const googlecloud = require('./google_cloud_test')
const { spawn } = require('child_process');
const express = require('express');
var router = express.Router();

router.get('/books', async function (req, res) {
    let videoId = req.query.videoId;
    console.log(videoId);
    let videoData = await youtube.getVideoMetadata(videoId);
    console.log(videoData);
    let topics = [await googlecloud.getVideoTopics(videoData[0]), await googlecloud.getVideoTopics(videoData[1])];
    let topicsSet = new Set(topics);
    console.log(Array.from(topicsSet).toString().replace(",", "+"));
    //tags = videoData.tags.toString();
    books.getBooks(topics.toString()).then(result => res.send(result));
    });

module.exports = router
