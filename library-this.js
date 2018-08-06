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
            },
 printPlaylists: function() {
   for (var key in this.playlists) {
     if (this.playlists[key].tracks.length > 1) {
       console.log(this.playlists[key].id + ": " + this.playlists[key].name + " - " + this.playlists[key].tracks.length + " tracks");
     } else {
       console.log(this.playlists[key].id + ": " + this.playlists[key].name + " - " + this.playlists[key].tracks.length + " track");
     }
   }
 },
 printTracks: function() {
   for (var key in this.tracks) {
     console.log(key + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " (" + this.tracks[key].album + ")");
   }
 }
}