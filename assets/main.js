const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log(prev, next)

next.addEventListener ('click', function(){

    let activeItem = document.querySelector('.item.active')

    let itemToActive = activeItem.nextElementSibling

    if( activeItem.classList.contains('last')){
        itemToActive = document.querySelector('.item.first')
    }

    activeItem.classList.remove('active')

    itemToActive.classList.add('active')


})

next.addEventListener ('click', function(){

    let activeHover = document.querySelector('.hover.active')

    let hoverToActive = activeHover.nextElementSibling

    if( activeHover.classList.contains('last')){
        hoverToActive = document.querySelector('.hover.first')
    }

    activeHover.classList.remove('active')

    hoverToActive.classList.add('active')


})

prev.addEventListener ('click', function(){

    let activeItem = document.querySelector('.item.active')

    let itemToActive = activeItem.previousElementSibling

    if( activeItem.classList.contains('first')){
        itemToActive = document.querySelector('.item.last')
    }

    activeItem.classList.remove('active')

    itemToActive.classList.add('active')


})

prev.addEventListener ('click', function(){

    let activeHover = document.querySelector('.hover.active')

    let hoverToActive = activeHover.previousElementSibling

    if( activeHover.classList.contains('first')){
        hoverToActive = document.querySelector('.hover.first')
    }

    activeHover.classList.remove('active')

    hoverToActive.classList.add('active')


})