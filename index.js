//carousel
let carouselIndex = 1;

function displayCarousel(index) {
    const paintings = document.querySelectorAll('.painting');
    if (carouselIndex > paintings.length) {
        carouselIndex = 1
    }
    if (carouselIndex < 1) {
        carouselIndex = paintings.length
    }
    for (let i = 0; i < paintings.length; i++) {
        paintings[i].style.display = 'none';
    }
    paintings[carouselIndex - 1].style.display = 'block';
}
function nextSlide() {
    carouselIndex -= 1;
    displayCarousel(carouselIndex);
}

function previousSlide() {
    carouselIndex += 1;
    displayCarousel(carouselIndex);
}

displayCarousel(carouselIndex);
document.getElementById('previous').addEventListener('click', previousSlide);
document.getElementById('next').addEventListener('click', nextSlide);

//numbers
function countNumbers(id, max) {
    let counter = 1;
    const timer = setInterval(function () {
        document.getElementById(id).innerHTML = counter++;
        if (counter === max +1) {
            clearInterval(timer);
        }
    }, 500);
}
countNumbers('number', 10);

//tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

const handleTab = e => {
    e.preventDefault();

    tabs.forEach(tab => tab.classList.remove('active'));
    e.currentTarget.classList.add('active');

    /*contents.forEach(content => content.classList.remove('active'));
    [...contents].filter(content => content.dataset.tab === e.currentTarget.dataset.tab)[0].classList.add('active');*/
}
tabs.forEach(tab => tab.addEventListener('click', handleTab));