const burger=document.querySelector('.menu-icon')
const menuBody=document.querySelector('.ul-nav')

burger.addEventListener('click',function(){
    console.log('lol');
    menuBody.classList.toggle('active')
})