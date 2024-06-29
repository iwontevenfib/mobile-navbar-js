// MOBILE NAVBAR

const openmenu = document.getElementsByClassName('menu-btn')[0]
const nav = document.getElementsByClassName('mobile-nav')[0]

openmenu.addEventListener('click', () => {
    nav.classList.toggle('active1');
    openmenu.classList.toggle('active');
})



function closeNavbar() {
    var navbarLinks = document.getElementById("mobile-container");
    navbarLinks.classList.remove("active1");
    resetMenu();
}

function toggleImage(img) {
    if (img.src.endsWith('essen/openmenu.svg')) {
        img.src = 'essen/closemenu.svg';
    } else if (img.src.endsWith('essen/closemenu.svg')) {
        img.src = 'essen/openmenu.svg';
    } else {
        img.src = 'essen/openmenu.svg';
    }
}
function resetMenu() {
    const reset = openmenu.querySelector('img')
    reset.src = 'essen/openmenu.svg';
    openmenu.classList.toggle('active');

}

document.onclick = function(e){
    if (!openmenu.contains(e.target) && !nav.contains(e.target) ){
        nav.classList.remove("active1");
        openmenu.classList.remove('active');

        const reset = openmenu.querySelector('img')
        reset.src = 'essen/openmenu.svg';
    } 
}