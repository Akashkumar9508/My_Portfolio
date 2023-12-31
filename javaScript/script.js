const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});