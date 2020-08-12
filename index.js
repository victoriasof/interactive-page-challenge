//carousel
let carouselIndex = 1;
displayCarousel(carouselIndex);

document.getElementById('previous').addEventListener('click', previousSlide);
document.getElementById('next').addEventListener('click', nextSlide);

function nextSlide() {
    displayCarousel(carouselIndex - 1);
}

function previousSlide() {
    displayCarousel(carouselIndex + 1);
}

function displayCarousel(index) {
    let paintings = document.querySelectorAll('.painting');
    if (index > paintings.length) {
        carouselIndex = 1
    }
    if (index < 1) {
        carouselIndex = paintings.length
    }
    for (let i = 0; i < paintings.length; i++) {
        paintings[i].style.display = 'none';
    }
    paintings[carouselIndex - 1].style.display = 'block';
}

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
