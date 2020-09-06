let changeHeartColor = document.getElementsByClassName('changeHeartColor');
let changeColor = false;
for (let i = 0; i<5;i++){
    changeHeartColor[i].addEventListener('click', ()=>{
        
        if (changeColor == false){
            changeHeartColor[i].style.fill = '#FF0000';
            changeColor = true;
        }else if(changeColor==true){
            changeHeartColor[i].style.fill = '#ffc20e';
            changeColor = false;
        }
        
    })
}