const skazy = document.querySelector('.skazy')
const menuSkaz = document.querySelector('.menu-skaz')



skazy.addEventListener('click', (e) => {
    e.preventDefault()
    menuSkaz.classList.toggle('active')
})