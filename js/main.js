// Change nav Backgroun when Scrolling
let nav = document.getElementById("navbar");
window.addEventListener("scroll", (e) => {
    if (this.scrollY > 50) {
        nav.classList.add("changeBg");
    } else {
        nav.classList.remove("changeBg");
    }
});

let menu = document.getElementById("navContainer"),
    openMenu = document.getElementById("open_btn"),
    closeMenu = document.getElementById("close_btn");
let logo = document.getElementById("logo");
openMenu.addEventListener("click", () => {
    menu.classList.add("collapse");
    logo.style.display = "none";
    openMenu.style.opacity = 0;
});
document.addEventListener("click", (element) => {
    if (
        element.target.id != "open_btn" &&
        element.target.parentElement.id != "open_btn" &&
        element.target.id != "navContainer"
    ) {
        menu.classList.remove("collapse");
        openMenu.style.opacity = 1;
        logo.style.display = "block";
    }
});

// landing counter
window.addEventListener("load", () => {
    let count = document.querySelector(".counter");
    let target = count.dataset.count;
    let counting = setInterval(() => {
        count.textContent++;
        if (count.textContent == target) {
            clearInterval(counting);
        }
    }, 1000);
});
