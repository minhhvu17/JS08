let musicPlay = document.getElementsByClassName('play-music');
let songClicked = document.getElementsByClassName('nameSong');
let boolean = true;
let audioElement = document.getElementsByTagName('audio');
let playerSongName = document.getElementsByClassName('player-songName');
let playerArtist = document.getElementsByClassName('player-artist');
let playerIMG = document.getElementsByClassName('player-img');


for (let i=0; i<musicPlay.length;i++){
    musicPlay[i].addEventListener('click',()=>{
        let m =songClicked[i].innerHTML;
        console.log(m);
        
        for(let n = 0;n<DATA.length;n++){
            for(let p = 0; p<DATA[n].song.length;p++){
                // console.log(DATA[n].song[p].songName)
                if (DATA[n].song[p].songName==m){
                    console.log(DATA[n].song[p]);
                    console.log(DATA[n].song[p].audio)
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

