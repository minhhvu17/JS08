let hoverFunc = document.getElementsByClassName('hover-func');
let hoverOn = document.getElementById('hover-on-img');
for(let i = 0;i<DATA.length;i++){
    console.log(DATA[i])
    for (let m =0; m <DATA[i].song.length;m++){
        if (hoverFunc[m].getAttribute('src')==DATA[i].song[m].songImage){
            hoverFunc[m].addEventListener('mouseover',()=>{
                hoverOn.setAttribute('src', DATA[i].song[m].songImage)
            })
        }



    }
}


let clickSong2 = document.getElementsByClassName('player-body2');

function beginAudio(){
    clickSong2[0].style.height = '63px';
    
}
