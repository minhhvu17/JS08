let back = document.getElementById('player-back-icon');
let forward = document.getElementById('player-forward-icon');
let songArray = [];

for (let n = 0; n < DATA.length; n++) {
    for (let p = 0; p < DATA[n].song.length; p++) {
        songArray.push(DATA[n].song[p].audio);
    }
}
console.log(songArray);



for (let i = songArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = songArray[i]
    songArray[i] = songArray[j]
    songArray[j] = temp
}
console.log(songArray);
var songIndex = 0;


function nextSong() {
    songIndex ++;
    audioElement[0].setAttribute('src', songArray[songIndex]);
    for(let n = 0;n<DATA.length;n++){
        for(let p = 0; p<DATA[n].song.length;p++){
            
            if (DATA[n].song[p].audio==songArray[songIndex]){
                
                playerSongName[0].innerHTML = DATA[n].song[p].songName;
                playerArtist[0].innerHTML = DATA[n].artist;    
                playerIMG[0].style.backgroundImage = `url(${DATA[n].song[p].songImage})`;  
            }
        }
    }
    playing = true;
    playOrPause();

}
function previousSong() {
    songIndex --;
    if (songIndex<0){
        songIndex = 0;
    }
    
    
    console.log(songIndex);
    audioElement[0].setAttribute('src', songArray[songIndex]);
    for(let n = 0;n<DATA.length;n++){
        for(let p = 0; p<DATA[n].song.length;p++){
            
            if (DATA[n].song[p].audio==songArray[songIndex]){
                
                playerSongName[0].innerHTML = DATA[n].song[p].songName;
                playerArtist[0].innerHTML = DATA[n].artist;    
                playerIMG[0].style.backgroundImage = `url(${DATA[n].song[p].songImage})`;  
            }
        }
    }
    playing = true;
    playOrPause();

}


