let musicPlay = document.getElementsByClassName('play-music');
let songClicked = document.getElementsByClassName('nameSong');
let boolean = true;
let playerPlayed = document.getElementById('player-played');
let audioElement = document.getElementsByTagName('audio');
let playerSongName = document.getElementsByClassName('player-songName');
let playerArtist = document.getElementsByClassName('player-artist');
let playerIMG = document.getElementsByClassName('player-img');
let playerAppear = document.getElementsByClassName('player-body');
let playerTimeRun = document.getElementsByClassName('player-time-run');

let changePlayerToPlayOrPause = document.getElementById('player-play-btn');


for (let i=0; i<musicPlay.length;i++){
    musicPlay[i].addEventListener('click',()=>{
        let m =songClicked[i].innerHTML;
        console.log(m);
        playerAppear[0].style.height = '63px';
        
        for(let n = 0;n<DATA.length;n++){
            for(let p = 0; p<DATA[n].song.length;p++){
                // console.log(DATA[n].song[p].songName)
                if (DATA[n].song[p].songName==m){
                    // console.log(DATA[n].song[p]);
                    // console.log(DATA[n].song[p].audio)
                    audioElement[0].setAttribute('src' , DATA[n].song[p].audio);   
                    audioElement[0].play();
                    playerSongName[0].innerHTML = DATA[n].song[p].songName;
                    playerArtist[0].innerHTML = DATA[n].artist;    
                    playerIMG[0].style.backgroundImage = `url(${DATA[n].song[p].songImage})`;  
                }
            }
        }
        
    
    })
};
function formatTime(seconds) {
                        let min = Math.floor(seconds / 60)
                        let sec = Math.floor(seconds - (min * 60))
                        if (sec < 10) {
                            sec = `0${sec}`
                        }
                        return `${min}:${sec}`
                    }
function updateProgressValue() {
    playerPlayed.max =audioElement[0].duration;
    playerPlayed.value = audioElement[0].currentTime;
    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(audioElement[0].currentTime));
    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00';
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(audioElement[0].duration));
    }
}
setInterval(updateProgressValue, 500)
function changeProgressBar() {
    audioElement[0].currentTime = playerPlayed.value;
    playerPlayed.style.width = `100 * (${value}/${max})` + '%';
    playerPlayed.style.maxWidth = `${max}` + 'px';
    console.log(playerPlayed);
}

let playPause = document.getElementById('player-play-pause-icon');
let playing = true;
function playOrPause(){
    if(playing ==true){
        playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32" style="max-height: 20px"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>';
        changePlayerToPlayOrPause.innerHTML = '<svg id="play-to-pause-btn" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z" style="transform: translate(-2px,0.5px)"></path></svg>';
        audioElement[0].play();
        playing = false;
    }else{
        playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31" style="max-height: 20px"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>';
        changePlayerToPlayOrPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>';
        audioElement[0].pause();
        playing = true;
    }     
}
playOrPause();


