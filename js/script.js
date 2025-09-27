const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('nav')

burgerMenu.addEventListener('click', function () {
	burgerMenu.classList.toggle('active')
	navMenu.classList.toggle('active')
})

navMenu.addEventListener('click', function (e) {
	if (e.target === navMenu) {
		burgerMenu.classList.remove('active')
		navMenu.classList.remove('active')
	}
})
