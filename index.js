const sliderWrapper = document.querySelector('.slider__container')
const sliderLine = document.querySelector('.slider__line')
const images = document.querySelectorAll('img')
const dots = document.querySelectorAll('.slider__dot')
const nextBtn = document.querySelector('.slider__next-btn')
const prevBtn = document.querySelector('.slider__pref-btn')

// transform: translate(-800px) 

let orderImg = 0;

let width;

function setWidthLine() {
    width = sliderWrapper.offsetWidth
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'
    })

    console.log('width', width);
    console.log(sliderLine.style.width);
}

window.addEventListener('reseze', setWidthLine)
setWidthLine()

function switchForward() {
    orderImg++
    if(orderImg > images.length - 1) {
        orderImg = 0
    }
}


nextBtn.addEventListener('click', function switchForward() {
    orderImg++
    if(orderImg > images.length - 1) {
        orderImg = 0
    }
    scrollSlider()
})


prevBtn.addEventListener('click', function switchBack() {
    orderImg--
    if(orderImg < 0) {
        orderImg = images.length - 1
    }
    scrollSlider()
})

function scrollSlider() {
    const value = orderImg * width
    sliderLine.style.transform = `translate(-${value}px)`
}

const arrDots = Array.from(dots)
// console.log(arrDots);

arrDots.forEach((e) => {
    
    e.addEventListener('click', function () {
        orderImg++
        if(orderImg > images.length - 1) {
        orderImg = 0
        }
        scrollSlider()
    })
})   





