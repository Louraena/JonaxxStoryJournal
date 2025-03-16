function toggleMenu() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("show"); // Show/hide menu
    hamburger.classList.toggle("active"); // Change icon to "X"
}
