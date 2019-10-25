require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var omdbKey = "trilogy"
var searchTerm = "";
var argv = process.argv;
var command = process.argv[2];


for (var i = 3; i < argv.length; i++) {
    if (i > 3 && i < argv.length) {
        searchTerm = `${searchTerm} + ${argv[i]}`;
    } else {
        searchTerm += argv[i];
    }
}

var axios = require("axios");


// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

function movieThis(searchTerm) {

    if (!searchTerm){
        searchTerm = "Fight+Club";
        console.log (`If you haven't watched "Fight CLub", then you should.`);
    }

    axios.get(queryUrl).then(
    function (response) {
        console.log(`Title: ${ response.data.Title }`);
        console.log(`Year: ${ response.data.Year }`);
        console.log(`IMDB Rating: ${ response.data.imdbRating }`);
        console.log(`Rotten Tomatoes Score: ${ response.data.Ratings[1].Value }`);
        console.log(`Country: ${ response.data.Country }`);
        console.log(`Language: ${ response.data.Language }`);
        console.log(`Plot: ${ response.data.Plot }`);
        console.log(`Actors: ${ response.data.Actors }`);
    })
    .catch(function (error) {
        
            console.log(error);
    
    });
};

movieThis(searchTerm);