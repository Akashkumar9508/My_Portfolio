const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 1300) {
        header.classList.add("sticky2");
        header.classList.remove("sticky");
    } else if (window.scrollY > 650 && 1300) {
        header.classList.add("sticky");
        header.classList.remove("sticky2");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("sticky2");
    }
});
