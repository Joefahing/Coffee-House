/*
Task

Add "active" class to header-container when nav-menu is clicked
Remove "active" class when header is clicked
*/



const bodyElement = document.body;
const headerContainer = document.querySelector(".header-container");
const menuElement = document.querySelector('.nav-menu');
const navHeader = document.querySelector("nav");

const colors = {
    black: "var(--black)",
    gray200: "var(--grayscale200)",
    gray300: "var(--grayscale300)",
    white: "white"
}

//This function will toggle active class for headerContainer, so the hidden menu item will appear 
const navActive = () => {
    headerContainer.classList.toggle("active");
    setNavBackgroundColor(navHeader);
}

const setNavBackgroundColor = (nav) => {
    const style = nav.style;

    if (isElementActive(nav)) {
        style.backgroundColor = colors.black;
    }
    else if (window.scrollY > nav.clientHeight && !isElementActive(nav)) {
        style.backgroundColor = colors.gray300
    } else {
        style.backgroundColor = colors.white;
    }
}

const isElementActive = (element) => {
    return element.classList.contains('active');
}


menuElement.addEventListener('click', navActive);

document.addEventListener('scroll', () => {
    setNavBackgroundColor(navHeader);
});


