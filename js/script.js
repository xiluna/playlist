let songOne = {
  names: '4th Chamber',
  images: 'https://images.genius.com/e262e231b2ce492f1691373f5bf06fb6.1000x1000x1.jpg',
  artists: 'Gza',
  lengths: '4:37',
  links: 'https://www.youtube.com/watch?v=yOQGhC5nzus'
};

let songs = [songOne] 

$('.buttonAdd').click(function() {
  songs.forEach(function(song) {
    $('.list').append('<li> Song Name: ' + song.names + '</li>' + '<li> Song Image: ' + song.images + '</li>' + '<li> Song Artist: ' + song.artists + '</li>' + '<li> Song Length: ' + song.lengths + '</li>' + '<li> Song Link: ' + song.links + '</li>' );
  });
//   let songName = $(".sngName").val();
//   names.push(songName);

//   let songImage = $().val();
//   names.forEach(function(songN) {
//     $('.list').append(songN);
//   });

//   songImage.forEach(function(songImg) {
//     $('.list').append(songImg);
//   });

//   artist.forEach(function(songArtist) {
//     $('.list').append(songArtist);
//   });

//   songLength.forEach(function(songTime) {
//     $('.list').append(songTime);
//   });

//   songLink.forEach(function(songlnk) {
//     $('.list').append(songlnk);
//   });
});