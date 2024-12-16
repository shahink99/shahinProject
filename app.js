const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")



let navOpen = false;

navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove('nav-menu--open')
        // heartIcon.classList.remove('place__like-icon--fill')

        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add('nav-menu--open')
        // heartIcon.classList.add('place__like-icon--fill')

        navOpen = true
    }
})

function toggleHeart(box){
    const heart = box.querySelector('.place__like-icon');
    heart.classList.toggle('place__like-icon--fill')
}

// place__like-icon--fill