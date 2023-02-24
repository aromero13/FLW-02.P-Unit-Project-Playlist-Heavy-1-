// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
/**
let images =["https://upload.wikimedia.org/wikipedia/en/4/4e/Country_Grammar.jpg","https://lastfm.freetls.fastly.net/i/u/770x0/40e1ca62959fe132102a52c93d5096ea.jpg","https://e.snmc.io/i/600/s/ac97d7c5534074d5257fb4c79837b6c6/5477289/j-cole-2014-forest-hills-drive-cover-art.jpg","https://i.scdn.co/image/ab67616d00001e02b4070df60fced11f282548d0"];

let artists = ["Nelly","Doja Cat","J. Cole","Don Omar"];
let songLinks = ["https://music.apple.com/us/album/luven-me/1440782396i=1440782732","https://music.apple.com/us/album/like-that-feat-gucci-mane/1486262969?i=1486263181","https://music.apple.com/us/album/deja-vu/1440934458?i=1440934623","https://music.apple.com/us/album/dile/1467968644?i=1467968652"];
let songNames =["Luven Me","Like That","Deja Vu","Dile"];
*/



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.


// task 12: create an object for each of your songs.


let song1 ={
  songImage:"https://upload.wikimedia.org/wikipedia/en/4/4e/Country_Grammar.jpg",
  name:"Luven Me",
  artist:"Nelly",
  songLink:"https://music.apple.com/us/album/luven-me/1440782396i=1440782732"
};

let song2 ={  songImage:"https://lastfm.freetls.fastly.net/i/u/770x0/40e1ca62959fe132102a52c93d5096ea.jpg",
  name:"Like That",
  artist:"Doja Cat",
  songLink:"https://music.apple.com/us/album/like-that-feat-gucci-mane/1486262969?i=1486263181"
};

let song3 ={
  songImage:"https://e.snmc.io/i/600/s/ac97d7c5534074d5257fb4c79837b6c6/5477289/j-cole-2014-forest-hills-drive-cover-art.jpg",
  name:"Deja Vu",
  artist:"J. Cole",
  songLink:"https://music.apple.com/us/album/deja-vu/1440934458?i=1440934623"
};

let song4 ={
  songImage:"https://i.scdn.co/image/ab67616d00001e02b4070df60fced11f282548d0",
  name:"Dile",
  artist:"Don Omar",
  songLink:"https://music.apple.com/us/album/dile/1467968644?i=1467968652"
};

let playlist=[song1,song2,song3,song4];
console.log(playlist)


// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.

// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.

// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  


// task 10: use `.push()` to add each input value to the correct array.
let userImageInput= image.value();
let userSongName= songName.value();
let userArtist= artist.value();
let userSongLink= songLink.value();
songNames.push(userSongName)
}        
// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  images.forEach(function(image){
    displayImage.insertAdjacentHTML("beforeend",`<img src=${image}>`)
  })
   songNames.forEach(function(song){
    displaySong.insertAdjacentHTML("beforeend",`<p>${song}</p>`)
  })
  songNames.forEach(function(song){
    displaySong.insertAdjacentHTML("beforeend",`<p>${song}</p>`)
  })
  artists.forEach(function(artist){
    displayArtist.insertAdjacentHTML("beforeend",`<p>${artist}</p>`)
  })
  songLinks.forEach(function(link){
    displayLink.insertAdjacentHTML("beforeend",`<a href=${link}>Song Link</a>`)
  })




}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
