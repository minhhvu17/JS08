let content = document.getElementById('each-slider');
let content2 = document.getElementById('each-slider2');
let content3 = document.getElementById('artistList')
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
            <div class="playable">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31" class="play-music">
                    <path
                        d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z">
                    </path>
                </svg>
            </div>
        </div>
        <div class="song-title">
            <div class="nameSong" style="font-size:15px">${baiHat}</div>
            <div>${ngheSi}</div>
        </div>
    </div>
    `;
    content.insertAdjacentHTML('beforeend', characterHTML);
}


// Hit cua tuan
let hitList = [];
let hitArtist = [];
hitList.push(DATA[4].song[7]);
hitList.push(DATA[3].song[4]);
hitList.push(DATA[4].song[6]);
hitList.push(DATA[1].song[0]);
hitList.push(DATA[5].song[2]);

hitArtist.push(DATA[4].artist);
hitArtist.push(DATA[3].artist);
hitArtist.push(DATA[4].artist);
hitArtist.push(DATA[1].artist);
hitArtist.push(DATA[5].artist);

for (let i = 0; i < 5; i++) {
    var characterHTML = `
    <div class="each-slider-title">
        <div class="each-slider-img" style="background-image: url('${hitList[i].songImage}')">
            <div class="playable">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31" class="play-music">
                    <path
                        d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z">
                    </path>
                </svg>
            </div>
        </div>
        <div class="song-title">
            <div style="font-size:15px" class="nameSong">${hitList[i].songName}</div>
            <div>${hitArtist[i]}</div>
        </div>
    </div>
    `;
    content2.insertAdjacentHTML('beforeend', characterHTML);
}




// Ca sĩ nổi bật
for (let i = 0; i < 4; i++) {
    var artistOdd = DATA[i].artist;
    var trackNumber = DATA[i].song.length;
    var artistImg = DATA[i].artistImage;
    var characterHTML = `
    <li>
        <div><img class="artistImg" src="${artistImg}" alt="">
        
        </div>
        <div class="artistContent">
            <div style="cursor:pointer">${artistOdd}</div>
            <div class="follow">
                <div class="trackNum">${trackNumber}<span><img src="pj-img/record.png" alt=""></span></div>
                <div id="followBtn"><button>Theo dõi <span><img src="pj-img/follow.png" alt=""></span></button></div>
            </div>
        </div>
    </li>
    `;
    content3.insertAdjacentHTML('beforeend', characterHTML);
}


// while(true){

// }