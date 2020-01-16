let names = [];
let images = [];
let artists = [];
let lengths = [];
let links = [];

$('.buttonAdd').click(function() {
  
  let songName = $(".sngName").val();
  names.push(songName);

  let songImage = $().val();
  names.forEach(function(songN) {
    $('.list').append(songN);
  });

  songImage.forEach(function(songImg) {
    $('.list').append(songImg);
  });

  artist.forEach(function(songArtist) {
    $('.list').append(songArtist);
  });

  songLength.forEach(function(songTime) {
    $('.list').append(songTime);
  });

  songLink.forEach(function(songlnk) {
    $('.list').append(songlnk);
  });
});