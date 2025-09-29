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

document.addEventListener('DOMContentLoaded', function () {
	const block = document.querySelector('.block-three')

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animated')
				}
			})
		},
		{
			threshold: 0.3,
		}
	)

	observer.observe(block)
})

function initBlockFiveAnimation() {
	const blockFive = document.querySelector('.block-five')

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animated')
				}
			})
		},
		{
			threshold: 0.3,
		}
	)

	if (blockFive) {
		observer.observe(blockFive)
	}
}

document.addEventListener('DOMContentLoaded', initBlockFiveAnimation)

const menuObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible')
				entry.target
					.querySelectorAll('.menu-column')
					.forEach(col => col.classList.add('visible'))
				const centerImage = entry.target.querySelector('.menu-center-image')
				if (centerImage) centerImage.classList.add('visible')
				menuObserver.unobserve(entry.target)
			}
		})
	},
	{ threshold: 0.2 }
)

document.querySelectorAll('.animate-up').forEach(el => {
	menuObserver.observe(el)
})
