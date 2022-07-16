//..sticky scroll bar 
const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
})

let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".navlist")

menu.onClick =() =>{
    menu.classList.toggle("bx-x")
    navList.classList.toggle("active")
}