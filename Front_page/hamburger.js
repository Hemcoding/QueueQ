const hamburger = document.querySelector('#hamburger')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu')
const close = document.querySelector('#close')

hamburger.addEventListener('click',() => {
    hamburger.style.display = "none";
    close.style.display = "block"

    menu.classList.add('active')
    overlay.classList.add('active')

    menu.classList.add('slide-left')
    overlay.classList.add('slide-left')

    menu.classList.remove('slide-right')
    overlay.classList.remove('slide-right')
})

close.addEventListener('click',() => {
    hamburger.style.display = "block";
    close.style.display = "none"

    menu.classList.add('slide-right')
    overlay.classList.add('slide-right')
    
    menu.classList.remove('slide-left')
    overlay.classList.remove('slide-left')
    
    setTimeout(() => {
        menu.classList.remove('active')
        overlay.classList.remove('active')
    }, 450);
})