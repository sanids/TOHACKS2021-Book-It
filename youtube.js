YOUTUBE_API_KEY = "AIzaSyC8cOGK15VMe85mY71i6ApN1XXCHfOaUtc";
const axios = require('axios');
const {google} = require('googleapis');
const parseString = require('xml2js').parseString;

module.exports = {
  getVideoMetadata: async function getVideoMetadata(videoId){
    const youtube = google.youtube({
      version: 'v3',
      auth: YOUTUBE_API_KEY
    });

    const reducer = (accumulator, currentValue) => accumulator + " " + currentValue._.replace("[object Object] ", "").replace(/\n/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, "").replace(/&gt;/g, "");
    var result = [];
  

    var res = await axios.get(`http://video.google.com/timedtext?lang=en&v=${videoId}`);
    parseString(res.data, function (err, r) {
      result.push(r);
    });
    // console.log(result);
    script = result[0].transcript.text.reduce(reducer).replace("[object Object] ", "").replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    let length = script.length;
    let blocks = [script.slice(0, length/2).join(" "), script.splice(length/2, length).join(" ")]
    // console.log(script);
    return blocks;


    // const response = await youtube.videos.list({
    //   "part": ["snippet"],
    //   "id": [videoId]
    // });

    // videos = response.data.items;
    // if (videos.length == 0){
    //   console.log('Error: No video found');
    //   return;
    // }

    // video = videos[0];
    // return {
    //   title: video.snippet.localized.title,
    //   description: video.snippet.localized.description,
    //   tags: video.snippet.tags
    // };
  }
}

// let met = getVideoMetadata(YOUTUBE_API_KEY, "6Af6b_wyiwI");
// met.then(function(result){
//   console.log(result);
// })