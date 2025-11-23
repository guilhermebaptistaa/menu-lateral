var btn = document.getElementById('btn-open')
var exp= document.querySelector('.side-bar')

btn.addEventListener('click', function(){
    exp.classList.toggle('expandir')
})