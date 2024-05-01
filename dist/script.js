
const navbar = document.querySelector('nav')
const openMenu = document.getElementById('menu-button')
const closeMenu = document.getElementById('menu-close')


// 
openMenu.addEventListener('click', function () {
    navbar.classList.add('open')
})
closeMenu.addEventListener('click', function () {
    navbar.classList.remove('open')
})

let index = 0
displayImages()
function displayImages() {

    let i;
    const images = document.querySelectorAll('#image-fade')
    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    index++
    if (index > images.length) {
        index = 1
    }
    images[index - 1].style.display = 'block'
    setTimeout(displayImages, 3000)

}
let trendIndex = 0
function displayTrend() {
    let i;
    const trendContent = document.querySelectorAll('#trend-content');
    for (i = 0; i < trendContent.length; i++) {
        trendContent[i].style.display = 'none';
    }
    trendIndex++
    if (trendIndex > trendContent.length) {
        trendIndex = 1
    }
    trendContent[trendIndex - 1].style.display = 'inline-block';
    setTimeout(displayTrend, 3000);
}
// displayTrend()