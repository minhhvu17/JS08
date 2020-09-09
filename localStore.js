let singerClick = document.getElementsByClassName('each-slider-img-singer');
console.log(singerClick);
function Redirect(){
    window.location = 'singer-profile.html';
}
for (let i =0; i<10;i++){
    console.log(singerClick[i]);
    singerClick[i].addEventListener('click', ()=>{
        localStorage.setItem('pfArtistName', singerList[i]);
        localStorage.setItem('pfArtistImg', singerImgList[i]);
        localStorage.setItem('pfArtistDesc', singerDesc[i]);
        localStorage.setItem('pfArtistAudio', singerSongAudioList[i]);
        localStorage.setItem('pfArtistSongImg', singerSongImgList[i]);
        localStorage.setItem('pfArtistSongName', singerSongNameList[i]);
        Redirect();
    })
}