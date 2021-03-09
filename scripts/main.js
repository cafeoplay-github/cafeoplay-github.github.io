// define HTML elements as variables
const div1 = document.getElementById("nav-mobile-button-div1");
const div2 = document.getElementById("nav-mobile-button-div2");
const div3 = document.getElementById("nav-mobile-button-div3");
const div4 = document.getElementById("nav-mobile-button-div4");
const menu = document.getElementById("nav-mobile-list");

// change the style of the menu button by adding and removing class
function toggleButton() {
    if (
        div1.classList.contains("nav-mobile-button-1and4-activated") === false
    ) {
        div1.classList.add("nav-mobile-button-1and4-activated");
        div2.classList.add("nav-mobile-button-2-activated");
        div3.classList.add("nav-mobile-button-3-activated");
        div4.classList.add("nav-mobile-button-1and4-activated");
        div1.classList.remove("nav-mobile-button-1and4-deactivated");
        div2.classList.remove("nav-mobile-button-2-deactivated");
        div3.classList.remove("nav-mobile-button-3-deactivated");
        div4.classList.remove("nav-mobile-button-1and4-deactivated");
    } else {
        div1.classList.add("nav-mobile-button-1and4-deactivated");
        div2.classList.add("nav-mobile-button-2-deactivated");
        div3.classList.add("nav-mobile-button-3-deactivated");
        div4.classList.add("nav-mobile-button-1and4-deactivated");
        div1.classList.remove("nav-mobile-button-1and4-activated");
        div2.classList.remove("nav-mobile-button-2-activated");
        div3.classList.remove("nav-mobile-button-3-activated");
        div4.classList.remove("nav-mobile-button-1and4-activated");
    }
}

// show/hide drawer menu
function toggleMenu() {
    if (menu.classList.contains("nav-mobile-list-hidden")) {
        menu.classList.add("nav-mobile-list-shown");
        menu.classList.remove("nav-mobile-list-hidden");
    } else {
        menu.classList.add("nav-mobile-list-hidden");
        menu.classList.remove("nav-mobile-list-shown");
    }
}

// combine both functions above
function toggleButtonAndMenu() {
    toggleButton();
    toggleMenu();
}
