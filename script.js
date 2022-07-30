//..sticky scroll bar 
const header = document.querySelector("header")
//twitter = document.querySelector("bx bxl-twitter")


// twitter.addEventListener("click", function(){
//     console.log("twitter clicked")
// })

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.navlist')

menu.onclick =() =>{
    menu.classList.toggle('bx-x')
    navList.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('bx-x')
    navList.classList.remove('active')
}

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: false
})

sr.reveal('.home-text',{
    delay: 350,
    origin: 'left'
})

sr.reveal('.home-img',{
    delay: 350,
    origin: 'right'
})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{
    delay: 290, 
    origin: 'bottom'
})

