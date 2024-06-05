
function openMenu() {
    document.getElementById("myMenu").style.width = "300px";
    document.querySelector('.content').style.marginLeft = "350px";
}

function closeMenu() {
    document.getElementById("myMenu").style.width = "0";
    document.querySelector('.content').style.marginLeft = "10px";
}

function conditionalCloseMenu() {
    if (window.innerWidth <= 990) {
        closeMenu();
    }
}

function setInitialMenuState() {
    if (window.innerWidth > 990) {
        openMenu();
    } else {
        closeMenu();
    }
}

// Set initial menu state on page load
window.addEventListener('load', setInitialMenuState);

// Add event listener to each link in the menu to close the menu when clicked
document.querySelectorAll('#myMenu a').forEach(function (link) {
    link.addEventListener('click', conditionalCloseMenu);
});

// Update menu state on window resize
window.addEventListener('resize', setInitialMenuState);