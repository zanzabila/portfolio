let darkMode = false;
let hamburgerIsOpen = false;

function switchMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (darkMode) {
        document.getElementById("cb1").checked = false;
        document.getElementById("cb2").checked = false;
        darkMode = false;
    } else {
        document.getElementById("cb1").checked = true;
        document.getElementById("cb2").checked = true;
        darkMode = true;
    }
}

function openHamburger() {
    let hamburger = document.getElementById("hamburger-nav");
    if (hamburgerIsOpen) {
        hamburger.classList.add("hamburger-hidden");
        hamburgerIsOpen = false;
        setTimeout(closingHamburger, 400);
    } else {
        hamburger.style.display = "block";
        hamburgerIsOpen = true;
        setTimeout(openingHamburger, 400);
    }
}

function closingHamburger() {
    let hamburger = document.getElementById("hamburger-nav");
    hamburger.style.display = "none";
}

function openingHamburger() {
    let hamburger = document.getElementById("hamburger-nav");
    hamburger.classList.remove("hamburger-hidden");
}

function onWidthChange() {
    let width = document.documentElement.clientWidth;
    if (width > 700 && hamburgerIsOpen) {
        hamburgerIsOpen = false;
        document.getElementById("hamburger-nav").style.display = 'none';
    }
}

window.addEventListener("resize", onWidthChange);

onWidthChange();