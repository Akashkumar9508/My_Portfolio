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
const t1=gsap.timeline();

t1.from("#logo-main",{
    x:"-100%",
    opacity:0,
    duration:1,
    ease : "back"
    
},'first');
t1.from("#navlinks",{
    x:"-100%",
    opacity:0,
    duration:1,
    ease : "back"
},'first')
t1.from(".left-text-section",{
    y:"-100%",
    opacity:0,
    duration:1,
    ease : "bounce"
},'second')
t1.from(".right-image-section",{
    y:"-100%",
    opacity:0,
    duration:1,
    ease : "bounce"
},'second')
t1.from(".social-icons",{
    x:"100%",
    opacity:0,
    duration:1,
    ease : "back"
})

const t2=gsap.timeline();



