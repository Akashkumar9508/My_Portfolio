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
t1.from("#menubtn",{
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


