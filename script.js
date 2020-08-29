let content = document.getElementById('each-slider');
let content2 = document.getElementById('each-slider2');
// De xuat cho ban 
for (let i = 0; i < 5; i++) {
    let randomArtist = Math.floor(Math.random() * DATA.length);
    // console.log(randomArtist);
    let random = Math.floor(Math.random() * DATA[randomArtist].song.length);
    
    var ngheSi = DATA[randomArtist].artist;
    var baiHat = DATA[randomArtist].song[random].songName;
    var anhBaiHat = DATA[randomArtist].song[random].songImage;

    var characterHTML = `
    <div class="each-slider-title">
        <div class="each-slider-img" style="background-image: url('${anhBaiHat}')">
        </div>
        <div class="song-title">
            <div style="font-size:15px">${baiHat}</div>
            <div>${ngheSi}</div>
        </div>
    </div>
    `;
    content.insertAdjacentHTML('beforeend', characterHTML);
}


// Hit cua tuan
let hitList = [];
let hitArtist = [];
hitList.push(DATA[2].song[7]);
hitList.push(DATA[3].song[4]);
hitList.push(DATA[4].song[6]);
hitList.push(DATA[1].song[0]);
hitList.push(DATA[5].song[2]);

hitArtist.push(DATA[2].artist);
hitArtist.push(DATA[3].artist);
hitArtist.push(DATA[4].artist);
hitArtist.push(DATA[1].artist);
hitArtist.push(DATA[5].artist);

for (let i = 0; i<5; i++){
    var characterHTML = `
    <div class="each-slider-title">
        <div class="each-slider-img" style="background-image: url('${hitList[i].songImage}')">
        </div>
        <div class="song-title">
            <div style="font-size:15px">${hitList[i].songName}</div>
            <div>${hitArtist[i]}</div>
        </div>
    </div>
    `;
    content2.insertAdjacentHTML('beforeend', characterHTML);
}




// Ca sĩ nổi bật


