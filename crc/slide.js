cont = 1;

document.getElementById('radio1').checked = true

setInterval(() => {
    nextImg()
}, 2000)

function nextImg(){
    cont++
    if(cont>3){
        cont  = 1
    }
   document.getElementById('radio' +cont).checked = true 
}