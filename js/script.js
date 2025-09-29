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

document.addEventListener('DOMContentLoaded', () => {
	const targets = document.querySelectorAll(
		'.block-two, .G, .knife-block, .about-us, .our-history, .knife-block p, .knife-block button'
	)

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate')
					observer.unobserve(entry.target) // запускаем только 1 раз
				}
			})
		},
		{ threshold: 0.3 }
	)

	targets.forEach(el => observer.observe(el))
})
