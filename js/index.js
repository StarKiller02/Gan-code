/*-----------kolor---------*/

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("nav").style.backgroundColor = "rgba(22, 22, 23, .8)";
        document.getElementById("nav").style.filter = "blu(5px)";
       
    } else {
        document.getElementById("nav").style.backgroundColor = "";
        
    }
}

const menu = document.querySelector('.sidenav');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});


