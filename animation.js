let searchBtn = document.querySelector('#header-search');
let searchActive = document.querySelector('.search-form');
searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-xmark')
    searchActive.classList.toggle('open-search') //open-search la class xong roi dinh nghia class do ben css
}
var menuBtn = document.querySelector('#header-btn')
var menuActive = document.querySelector('.navbar')
var menuList = document.querySelector('.navbar #nav-btn')
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-xmark')
    menuActive.classList.toggle('menu-list-open')
    menuList.classList.toggle('list-open')
    
}

AOS.init({
         duration: 1200, 
});
// prompt('hehehe')


