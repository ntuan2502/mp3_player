var songsToAdd = [{
        "name": "Em Không Sai Chúng Ta Sai",
        "artist": "Erik",
        "album": "",
        "url": "musics/Em-Khong-Sai-Chung-Ta-Sai-ERIK.mp3",
        "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg"
    },
    {
        "name": "Thích Thì Đến",
        "artist": "Lê Bảo Bình",
        "album": "",
        "url": "musics/Thich-Thi-Den-Le-Bao-Binh.mp3",
        "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/c/b/f/9cbf9f0ad3cdab1ec685a7ae62497035.jpg"
    },
    {
        "name": "Không Thể Cùng Nhau Suốt Kiếp",
        "artist": "Hoà Minzy",
        "album": "",
        "url": "musics/Khong-The-Cung-Nhau-Suot-Kiep-Hoa-Minzy-Mr-Siro.mp3",
        "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/8/c/2/38c2f7382b41582ed1557bef7b7267ff.jpg"
    },
    {
        "name": "Yêu Từ Đâu Mà Ra",
        "artist": "Lil Zpoet",
        "album": "",
        "url": "musics/Yeu-Tu-Dau-Ma-Ra-Lil-Zpoet.mp3",
        "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/e/7/f/3e7f077a9bf624aaf1ce9e2e8ec14069.jpg"
    },
    {
        "name": "Đừng Lo Anh Đợi Mà",
        "artist": "Mr Siro",
        "album": "",
        "url": "musics/Dung-Lo-Anh-Doi-Ma-Mr-Siro.mp3",
        "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/f/3/d/a/f3dab603fe21ef486ab717e22c380f92.jpg"
    }
];

Amplitude.init({
    "songs": [{
            "name": "Em Không Sai Chúng Ta Sai",
            "artist": "Erik",
            "album": "",
            "url": "musics/Em-Khong-Sai-Chung-Ta-Sai-ERIK.mp3",
            "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg"
        },
        {
            "name": "Thích Thì Đến",
            "artist": "Lê Bảo Bình",
            "album": "",
            "url": "musics/Thich-Thi-Den-Le-Bao-Binh.mp3",
            "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/c/b/f/9cbf9f0ad3cdab1ec685a7ae62497035.jpg"
        },
        {
            "name": "Không Thể Cùng Nhau Suốt Kiếp",
            "artist": "Hoà Minzy",
            "album": "",
            "url": "musics/Khong-The-Cung-Nhau-Suot-Kiep-Hoa-Minzy-Mr-Siro.mp3",
            "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/8/c/2/38c2f7382b41582ed1557bef7b7267ff.jpg"
        },
        {
            "name": "Yêu Từ Đâu Mà Ra",
            "artist": "Lil Zpoet",
            "album": "",
            "url": "musics/Yeu-Tu-Dau-Ma-Ra-Lil-Zpoet.mp3",
            "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/e/7/f/3e7f077a9bf624aaf1ce9e2e8ec14069.jpg"
        },
        {
            "name": "Đừng Lo Anh Đợi Mà",
            "artist": "Mr Siro",
            "album": "",
            "url": "musics/Dung-Lo-Anh-Doi-Ma-Mr-Siro.mp3",
            "cover_art_url": "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/f/3/d/a/f3dab603fe21ef486ab717e22c380f92.jpg"
        }
    ]
});


/*
  Shows the playlist
*/
document.getElementsByClassName('show-playlist')[0].addEventListener('click', function() {
    document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
    document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
    document.getElementById('white-player-playlist-container').style.display = "block";
});

/*
  Hides the playlist
*/
document.getElementsByClassName('close-playlist')[0].addEventListener('click', function() {
    document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
    document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
    document.getElementById('white-player-playlist-container').style.display = "none";
});

/*
  Gets all of the add to playlist buttons so we can
  add some event listeners to actually add to playlist.
*/
var addToPlaylistButtons = document.getElementsByClassName('add-to-playlist-button');

for (var i = 0; i < addToPlaylistButtons.length; i++) {
    /*
      Add an event listener to the add to playlist button.
    */
    addToPlaylistButtons[i].addEventListener('click', function() {
        var songToAddIndex = this.getAttribute('song-to-add');

        /*
          Adds the song to Amplitude, appends the song to the display,
          then rebinds all of the AmplitudeJS elements.
        */
        var newIndex = Amplitude.addSong(songsToAdd[songToAddIndex]);
        appendToSongDisplay(songsToAdd[songToAddIndex], newIndex);
        Amplitude.bindNewElements();

        /*
          Removes the container that contained the add to playlist button.
        */
        var songToAddRemove = document.querySelector('.song-to-add[song-to-add="' + songToAddIndex + '"]');
        songToAddRemove.parentNode.removeChild(songToAddRemove);
    });
}

/*
  Appends the song to the display.
*/
function appendToSongDisplay(song, index) {
    /*
      Grabs the playlist element we will be appending to.
    */
    var playlistElement = document.querySelector('.white-player-playlist');

    /*
      Creates the playlist song element
    */
    var playlistSong = document.createElement('div');
    playlistSong.setAttribute('class', 'white-player-playlist-song amplitude-song-container amplitude-play-pause');
    playlistSong.setAttribute('data-amplitude-song-index', index);

    /*
      Creates the playlist song image element
    */
    var playlistSongImg = document.createElement('img');
    playlistSongImg.setAttribute('src', song.cover_art_url);

    /*
      Creates the playlist song meta element
    */
    var playlistSongMeta = document.createElement('div');
    playlistSongMeta.setAttribute('class', 'playlist-song-meta');

    /*
      Creates the playlist song name element
    */
    var playlistSongName = document.createElement('span');
    playlistSongName.setAttribute('class', 'playlist-song-name');
    playlistSongName.innerHTML = song.name;

    /*
      Creates the playlist song artist album element
    */
    var playlistSongArtistAlbum = document.createElement('span');
    playlistSongArtistAlbum.setAttribute('class', 'playlist-song-artist');
    playlistSongArtistAlbum.innerHTML = song.artist + ' &bull; ' + song.album;

    /*
      Appends the name and artist album to the playlist song meta.
    */
    playlistSongMeta.appendChild(playlistSongName);
    playlistSongMeta.appendChild(playlistSongArtistAlbum);

    /*
      Appends the song image and meta to the song element
    */
    playlistSong.appendChild(playlistSongImg);
    playlistSong.appendChild(playlistSongMeta);

    /*
      Appends the song element to the playlist
    */
    playlistElement.appendChild(playlistSong);
}