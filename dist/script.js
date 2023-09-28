const navMenu = document.getElementById('nav')
const harmburger = document.getElementById("toggle-button")


harmburger.addEventListener('click', function () {
    navMenu.classList.toggle('hidden')

})


// change menu icon to close icon
function menu(e) {
    e.name === "menu" ? (e.name = "close") : (e.name = "menu")
}