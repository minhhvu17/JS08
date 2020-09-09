let singerContain = document.getElementById('each-singer');
let singerContain2 = document.getElementById('each-singer2');
singerList = [];
singerImgList = [];
singerDesc = [];
singerSongAudioList = [];
singerSongImgList = [];
singerSongNameList = [];
for(let p = 0; p< DATA.length;p++){
    singerList.push(DATA[p].artist);
    singerImgList.push(DATA[p].artistImage);
    singerDesc.push(DATA[p].description);
    for (let q=0; q<DATA[p].song.length;q++){
        singerSongAudioList.push(DATA[p].song[q].audio);
        singerSongImgList.push(DATA[p].song[q].songImage);
        singerSongNameList.push(DATA[p].song[q].songName);
    }
} 
console.log(singerList);
console.log(singerImgList);
console.log(singerDesc);
console.log(singerSongAudioList);
console.log(singerSongAudioList);
console.log(singerSongNameList);

for (let i = 0; i < 5; i++) {
    

    var characterHTML = `
    <div class="each-slider-singer">
        <div class="each-slider-img-singer" style="background-image: url('${singerImgList[i]}')">
        </div>
      
        <div class="song-title">
            <div class="nameSong" style="font-size:15px">${singerList[i]}</div>
              
        </div>
    </div>
    `;
    singerContain.insertAdjacentHTML('beforeend', characterHTML);
    
}
for (let i = 5;i<singerList.length;i++){
    var characterHTML = `
        <div class="each-slider-singer"> 
            <div class="each-slider-img-singer" style="background-image: url('${singerImgList[i]}');">
            </div>
      
            <div class="song-title">
                <div class="nameSong" style="font-size:15px">${singerList[i]}</div>
              
            </div>
        </div>
        `;
    singerContain2.insertAdjacentHTML('beforeend', characterHTML);

}


