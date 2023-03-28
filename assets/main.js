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

prev.addEventListener ('click', function(){

    let activeItem = document.querySelector('.item.active')

    let itemToActive = activeItem.previousElementSibling

    if( activeItem.classList.contains('first')){
        itemToActive = document.querySelector('.item.last')
    }

    activeItem.classList.remove('active')

    itemToActive.classList.add('active')


})