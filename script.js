let content = document.getElementById('each-slider');

for (let i = 0; i < 5; i++) {
    let randomArtist = Math.floor(Math.random() * DATA.length);
    console.log(randomArtist);
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
