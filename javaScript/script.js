const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 1300) {
        header.classList.add("sticky2");
        header.classList.remove("sticky");
    } else if (window.scrollY > 650 && 1300) {
        header.classList.add("sticky");
        header.classList.remove("sticky2");
    } else if (window.scrollY > 1300 && 2000) {
        header.classList.add("sticky");
        header.classList.remove("sticky2");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("sticky2");
    }
});
         
const menubtn = document.getElementById('menubtn'); // 
let isMenuOpen = false;
menubtn.addEventListener('click', function() {
    if (!isMenuOpen) {
        menubtn.classList.remove('bx-menu');
        menubtn.classList.add('bx-x');
        isMenuOpen = true;
    } else {
        menubtn.classList.remove('bx-x');
        menubtn.classList.add('bx-menu');
        isMenuOpen = false;
    }
});
const menuBtn = document.getElementById('menubtn');
const sidePanel = document.getElementById('navlinks');

let isPanelOpen = false;

menuBtn.addEventListener('click', function() {
    if (!isPanelOpen) {
        sidePanel.classList.add('panel-open');
        isPanelOpen = true;
    } else {
        sidePanel.classList.remove('panel-open');
        isPanelOpen = false;
    }
});

// gsap 

