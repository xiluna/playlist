let songName = [];
let songImage = [];
let artist = [];
let songLength = [];
let songLink = [];

$('.button').click(function() {
  
  songName.forEach(function(songN) {
    $().append(songN);
  });

  songImage.forEach(function(songImg) {
    $().append(songImg);
  });

  artist.forEach(function(songArtist) {
    $().append(songArtist);
  });

  songLength.forEach(function(songTime) {
    $().append(songTime);
  });
});