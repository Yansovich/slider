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
setActiveStyle()

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
    setActiveStyle()
})


prevBtn.addEventListener('click', function switchBack() {
    orderImg--
    if(orderImg < 0) {
        orderImg = images.length - 1
    }
    scrollSlider()
    setActiveStyle()
})

function scrollSlider() {
    const value = orderImg * width
    sliderLine.style.transform = `translate(-${value}px)`
}

function setActiveStyle () {
    dots[orderImg].classList.add(`activePoint`)
}

function removeActiveStyle () {
    dots[orderImg].classList.remove(`activePoint`)
}


// for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener ('click', () => {
//         orderImg = i;
//         scrollSlider()
//         setActiveStyle()
//     })
// }

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        removeActiveStyle()
        orderImg = i;
        scrollSlider()
        setActiveStyle()
    })
})




