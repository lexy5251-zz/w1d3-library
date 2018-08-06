var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for(var key in library.playlists){
    console.log(library.playlists[key].id + ": " + library.playlists[key].name + " - " + library.playlists[key].tracks.length + "tracks");
  }
}

console.log(printPlaylists());





// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var key in library.tracks){
console.log(key + ": " +library.tracks[key].name + " by " +library.tracks[key].artist + " (" + library.tracks[key].album+ ")");
  }
}


console.log(printTracks());




// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

// var id = [];

  console.log(playlistId+ ": "+library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");


 for (var index in library.playlists[playlistId].tracks){
  var key = library.playlists[playlistId].tracks[index]
   console.log(key+": " + library.tracks[key].name + "by" + library.tracks[key].artist + " ( "+library.tracks[key].album+" )");

 }



}

printPlaylist("p01");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
   var p  = library.playlists;
   p[playlistId].tracks.push(trackId);

}


addTrackToPlaylist("t03","p01");
console.log(library.playlists);




// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {

  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// random id


// adds a track to the library

var addTrack = function (name, artist, album) {
    var id = uid();

    library.tracks[id] = {};
    library.tracks[id].id = id;
    library.tracks[id].name = name;
    library.tracks[id].artist = artist;
    library.tracks[id].album = album;
    console.log(library.tracks);
}
addTrack("exercise", "vincent", "hello");
//adds a playlist to the library

var addPlaylist = function (name) {
    var id = uid();
    library.playlists[id] = {};
    library.playlists[id].id = id;
    library.playlists[id].name = name;
    library.playlists[id].tracks = "";
    console.log(library.playlists);


}
addPlaylist("exercise");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}