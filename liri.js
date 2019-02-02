require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//search function
function searchSong(songName) {
    if (!songName) songName="Ace of Base The Sign"; 
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var result = data.tracks.items[0];
        console.log(result.name);
        console.log(result.album.name);
        console.log(result.preview_url);
        console.log(result.artists[0].name);

    });
}   
var app = process.argv[2];
var song = process.argv[3];

    switch (app) {
        case "spotify-this-song":
            searchSong(song);
        break;
        default: 
            console.log('please select a valid option')
    };