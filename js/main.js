document.addEventListener('DOMContentLoaded', function () {
	SmoothScroll({
		animationTime: 800,
		stepSize: 75,
		accelerationDelta: 30,
		accelerationMax: 2,
		keyboardSupport: true,
		arrowScroll: 50,
		pulseAlgorithm: true,
		pulseScale: 4,
		pulseNormalize: 1,
		touchpadSupport: true,
	})
})


document.addEventListener('DOMContentLoaded', function () {
	function onScroll() {
		let title = document.querySelector('.decision__title')
		let text = document.querySelector('.decision__text')
		let image = document.querySelector('.decision__img')
		let border = document.querySelector('.decision-border')

		let titleRect = title.getBoundingClientRect()
		let textRect = text.getBoundingClientRect()
		let imgRect = image.getBoundingClientRect()
		let borderRect = border.getBoundingClientRect()

		let windowHeight = window.innerHeight

		let titleTrigger = windowHeight * 0.75 // Заголовок з'являється при 75%
		let textTrigger = windowHeight * 0.9 // Текст з'являється при 50%
		let imgTrigger = windowHeight * 0.75 // Картинка з'являється при 75%
		let borderTrigger = windowHeight * 0.90 // Лінія з'являється при 80%

		if (titleRect.top < titleTrigger) {
			title.classList.add('visible-title')
		}
		if (textRect.top < textTrigger) {
			text.classList.add('visible-text')
		}
		if (imgRect.top < imgTrigger) {
			image.classList.add('visible-img')
		}
		if (borderRect.top < borderTrigger) {
			border.classList.add('visible-border')
		}
	}

	window.addEventListener('scroll', onScroll)
	onScroll() // Викликаємо одразу для елементів, які вже у видимій зоні
})



document.addEventListener('DOMContentLoaded', function () {
	function onScroll() {
		let title = document.querySelector('.history__title')
		let leftText = document.querySelector('.history__info-text--left')
		let rightText = document.querySelector('.history__info-text--right')
		let centerText = document.querySelector('.history__info-text--center')

		let titleRect = title.getBoundingClientRect()
		let leftRect = leftText.getBoundingClientRect()
		let rightRect = rightText.getBoundingClientRect()
		let centerRect = centerText.getBoundingClientRect()

		let windowHeight = window.innerHeight

		let triggerTitle = windowHeight * 0.92 // Тайтл при 75% екрану
		let triggerText = windowHeight * 0.85 // Тексти при 60%

		if (titleRect.top < triggerTitle) {
			title.classList.add('visible-title')
		}
		if (leftRect.top < triggerText) {
			leftText.classList.add('visible-left')
		}
		if (rightRect.top < triggerText) {
			rightText.classList.add('visible-right')
		}
		if (centerRect.top < triggerText) {
			centerText.classList.add('visible-center')
		}
	}

	window.addEventListener('scroll', onScroll)
	onScroll() // Запускаємо одразу для елементів у видимій зоні
})


document.addEventListener('DOMContentLoaded', function () {
	function onScroll() {
		const title = document.querySelector('.nowadays__title')
		const texts = document.querySelectorAll('.nowadays__text')
		const img = document.querySelector('.nowadays__img')

		const titleRect = title.getBoundingClientRect()
		const windowHeight = window.innerHeight

		// Тригери для тайтлу і текстів
		const triggerTitle = windowHeight * 0.92
		const triggerText = windowHeight * 0.90
				const triggerImg = windowHeight * 0.8

const imgRect = img.getBoundingClientRect()
if (imgRect.top < triggerImg) {
	img.classList.add('visible-now-img')
}
		if (titleRect.top < triggerTitle) {
			title.classList.add('visible-title')
		}

		texts.forEach(text => {
			const textRect = text.getBoundingClientRect()
			if (textRect.top < triggerText) {
				text.classList.add('visible-text')
			}
		})
	}

	window.addEventListener('scroll', onScroll)
	onScroll() // Запускаємо для елементів, які вже у полі зору
})

document.addEventListener('DOMContentLoaded', function () {
	let hasAnimated = false

	function animateNumber(element, end, duration) {
		let startTime = null

		function updateNumber(currentTime) {
			if (!startTime) startTime = currentTime
			const progress = Math.min((currentTime - startTime) / duration, 1)
			const value = Math.floor(progress * end)
			element.textContent = value + '%'
			if (progress < 1) {
				requestAnimationFrame(updateNumber)
			}
		}

		requestAnimationFrame(updateNumber)
	}

	function checkScroll() {
		const section = document.querySelector('.statistics')
		const nums = document.querySelectorAll('.statistics__num')
		const tildes = document.querySelectorAll('.statistics__tilde')
		const targets = [80, 100, 70] // Цільові значення
		const sectionTop = section.getBoundingClientRect().top
		const windowHeight = window.innerHeight

		if (sectionTop < windowHeight * 0.9 && !hasAnimated) {
			hasAnimated = true

			// Запуск анімації чисел
			nums.forEach((num, index) => {
				animateNumber(num, targets[index], 1500) // Тривалість 1.5 сек
			})

			// Поворот тильди — одразу при старті анімації чисел
			tildes.forEach(tilde => {
				tilde.classList.add('rotate-tilde')
			})
		}
	}

	window.addEventListener('scroll', checkScroll)
	checkScroll() // Перевірка при завантаженні сторінки
})


document.addEventListener('DOMContentLoaded', function () {
	let hasAnimated = false

	function checkScroll() {
		const section = document.querySelector('.statistics__descr')
		const sectionTop = section.getBoundingClientRect().top
		const windowHeight = window.innerHeight

		if (sectionTop < windowHeight * 1 && !hasAnimated) {
			hasAnimated = true
			section.classList.add('visible') // Додаємо клас для запуску анімації
		}
	}

	window.addEventListener('scroll', checkScroll)
	checkScroll() // Перевірка при завантаженні сторінки
})


document.addEventListener('scroll', function () {
	let scrollTop = window.scrollY
	let parallaxSpeed = 0.5 // Чим менше значення, тим повільніше рухається фон

	// Паралакс для header-bg
	document.querySelector('.header-bg').style.transform = `translateY(${
		scrollTop * parallaxSpeed
	}px)`
})


document.addEventListener('scroll', function () {
	let scrollTop = window.scrollY
	const parallaxSpeedY = 0.3 // Швидкість паралаксу по осі Y

	// Перевірка, чи блок .about знаходиться в полі зору
	const aboutSection = document.querySelector('.about')
	const aboutBg = document.querySelector('.about-bg')

	if (!aboutSection || !aboutBg) return

	const aboutRect = aboutSection.getBoundingClientRect()
	const windowHeight = window.innerHeight

	// Якщо блок .about в полі зору
	if (aboutRect.top < windowHeight * 1) {
		// Починається анімація, коли блок на 90% в полі зору
		gsap.to(aboutBg, {
			y: scrollTop * parallaxSpeedY, // Тільки по осі Y
			ease: 'power2.out', // Плавна анімація
			duration: 0.3, // Тривалість анімації
		})
	} else {
		// Якщо блок не в полі зору, скидаємо трансформацію
		gsap.to(aboutBg, {
			y: 0, // Скидаємо зміщення
			ease: 'power2.out',
			duration: 0.3,
		})
	}
})
document.addEventListener('scroll', function () {
	let scrollTop = window.scrollY
	const parallaxSpeedY = 0.3 // Швидкість паралаксу по осі Y

	// Перевірка, чи блок .about знаходиться в полі зору
	const nowadaysSection = document.querySelector('.nowadays')
	const nowadaysBg = document.querySelector('.nowadays-bg')

	if (!nowadaysSection || !nowadaysBg) return

	const nowadaysRect = nowadaysSection.getBoundingClientRect()
	const windowHeight = window.innerHeight

	// Якщо блок .nowadays в полі зору
	if (nowadaysRect.top < windowHeight * 1) {
		// Починається анімація, коли блок на 90% в полі зору
		gsap.to(nowadaysBg, {
			y: scrollTop * parallaxSpeedY, // Тільки по осі Y
			ease: 'power2.out', // Плавна анімація
			duration: 0.3, // Тривалість анімації
		})
	} else {
		// Якщо блок не в полі зору, скидаємо трансформацію
		gsap.to(nowadaysBg, {
			y: 0, // Скидаємо зміщення
			ease: 'power2.out',
			duration: 0.3,
		})
	}
})



document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.process__tab') // Всі таби
	const tabContents = document.querySelectorAll('.process__content') // Всі контенти

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// Додаємо клас visible для таба
					entry.target.classList.add('visible')

					// Для контенту з затримкою
					const content = entry.target.querySelector('.process__content')
					if (content) {
						content.classList.add('visible')
					}

					observer.unobserve(entry.target) // Відключаємо подальше спостереження
				}
			})
		},
		{
			threshold: 0.5, // Анімація запускається, коли 50% елемента видно
		}
	)

	tabs.forEach(tab => {
		observer.observe(tab) // Спостерігаємо за кожним табом
	})
})


document.addEventListener('scroll', function () {
	const section = document.querySelector('.process')
	const sectionTop = section.getBoundingClientRect().top
	const windowHeight = window.innerHeight

	if (sectionTop < windowHeight * 0.9) {
		section.classList.add('show')
	}
})



document.addEventListener('DOMContentLoaded', function () {
	const button = document.querySelector('.process__btn')

	if (!button) return

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					button.classList.add('active') // Додаємо клас для запуску анімації
					observer.disconnect() // Зупиняємо спостереження після запуску
				}
			})
		},
		{ threshold: 0.5 } // Запуск анімації, коли кнопка стає видимою на 50%
	)

	observer.observe(button)
})




document.addEventListener('DOMContentLoaded', function () {
	const items = document.querySelectorAll('.about__item')
	const title = document.querySelector('.about__title')

	if (title) {
		const titleObserver = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('active')
					}
				})
			},
			{ threshold: 0.5 }
		)

		titleObserver.observe(title)
	}

	if (items.length) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('active')
					}
				})
			},
			{ threshold: 0.3 }
		)

		items.forEach(item => observer.observe(item))
	}
})

document.addEventListener('DOMContentLoaded', function () {
	const footer = document.querySelector('.footer')
	const title = document.querySelector('.footer__title')
	const texts = document.querySelectorAll('.footer__info-text')
	const form = document.querySelector('.footer__form')

	if (footer) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						footer.classList.add('active')
						title.classList.add('active')
						texts.forEach(text => text.classList.add('active'))
						form.classList.add('active')
					}
				})
			},
			{ threshold: 0.3 }
		)

		observer.observe(footer)
	}
})


document.addEventListener("DOMContentLoaded", function () {
  const blockquote = document.querySelector(".safety__blockquote");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blockquote.classList.add("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(blockquote);
});


$('.slick-slider').on('afterChange', function (event, slick, currentSlide) {
	$('.slick-slide').attr('inert', '')
	$('.slick-slide').eq(currentSlide).removeAttr('inert')
})

















gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

document.addEventListener('DOMContentLoaded', function () {
	// Масив цитат та авторів
	const quotes = [
		{
			text: '«Безопасность — это не результат случайности, <br> а следствие сознательных усилий.»',
			author: 'Генри Форд',
		},
		{
			text: '«Безопасность — это не только право, <br> но и обязанность каждого.»',
			author: 'Нельсон Мандела',
		},
		{
			text: '«Единственная вещь, которой <br> стоит бояться, — это сам страх.»',
			author: 'Джон Ф. Кеннеди',
		},
		{
			text: '«Никогда не сдавайтесь, <br> никогда, никогда, никогда.»',
			author: 'Уинстон Черчилль',
		},
	]

	let index = 0
	const quoteElement = document.querySelector('.header__blockquote')
	const authors = document.querySelectorAll('.header__author')

	// Анімація появи заголовка
	gsap.to('.header__title', {
		opacity: 1,
		y: 0,
		duration: 1.5,
		ease: 'power2.out',
	})

	// Анімація появи цитати
	gsap.to(quoteElement, {
		opacity: 1,
		scale: 1,
		duration: 0.5,
		ease: 'power2.out',
		delay: 1,
	})

	// Анімація появи авторів (виїзд зліва)
	authors.forEach((author, i) => {
		gsap.to(author, {
			opacity: 1,
			x: 0,
			duration: 0.1,
			delay: 0.5 + i * 0.2,
			ease: 'power2.out',
		})
	})

	// Встановлюємо першу цитату та автора
	quoteElement.innerHTML = quotes[index].text
	authors.forEach(author => {
		if (author.textContent.includes(quotes[index].author)) {
			author.classList.add('active')
		}
	})

	// Функція зміни цитати (автори не рухаються)
	// Функція плавної зміни цитати
	function changeQuote() {
		gsap.to(quoteElement, {
			opacity: 0,
			duration: 2.5,
			ease: 'power2.inOut',
			onComplete: function () {
				index = (index + 1) % quotes.length
				quoteElement.innerHTML = quotes[index].text

				// Оновлюємо автора (тільки зміна кольору, без руху)
				authors.forEach(author => author.classList.remove('active'))
				authors.forEach(author => {
					if (author.textContent.includes(quotes[index].author)) {
						author.classList.add('active')
					}
				})

				// Анімація появи нової цитати (знизу вгору)
				gsap.fromTo(
					quoteElement,
					{ opacity: 0, y: 0 },
					{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
				)
			},
		})
	}

	// Запускаємо зміну цитат кожні 5 секунд
	setInterval(changeQuote, 7000)
})

document.addEventListener('DOMContentLoaded', function () {
	gsap.to('.header__title span', {
		opacity: 1,
		y: 0,
		duration: 0.8,
		ease: 'power2.out',
		stagger: 0.1, // Плавна поява кожної букви
	})
})






////////////////////////////////////////////////////////////////






$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		dots: false,
		speed: 800,
		draggable: false,
	})

	$('.next-btn').on('click', function () {
		$('.slider').slick('slickNext')
	})

	$('.prev-btn').on('click', function () {
		$('.slider').slick('slickPrev')
	})
	$('.slider').on('afterChange', function (event, slick, currentSlide) {
		$('.slick-slide').attr('inert', 'true')
		$('.slick-current').removeAttr('inert')
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.process__tab')

	tabs.forEach(tab => {
		const content = tab.querySelector('.process__content')

		tab.addEventListener('click', function () {
			// Закриваємо всі відкриті вкладки, крім поточної
			tabs.forEach(item => {
				if (item !== tab) {
					item.classList.remove('active')
					let itemContent = item.querySelector('.process__content')
					itemContent.style.maxHeight = null
					itemContent.style.overflow = 'hidden'
				}
			})

			// Перемикаємо активний стан поточної вкладки
			tab.classList.toggle('active')

			// Визначаємо висоту контенту для плавного відкриття
			if (tab.classList.contains('active')) {
				content.style.maxHeight = content.scrollHeight + 'px'
				content.style.overflow = 'visible'
			} else {
				content.style.maxHeight = null
				content.style.overflow = 'hidden'
			}
		})
	})
})

flatpickr('#datetime-picker', {
	locale: {
		firstDayOfWeek: 1, // Понеділок — перший день тижня
		weekdays: {
			shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			longhand: [
				'Воскресенье',
				'Понедельник',
				'Вторник',
				'Среда',
				'Четверг',
				'Пятница',
				'Суббота',
			],
		},
		months: {
			shorthand: [
				'Янв',
				'Фев',
				'Март',
				'Апр',
				'Май',
				'Июнь',
				'Июль',
				'Авг',
				'Сент',
				'Окт',
				'Нояб',
				'Дек',
			],
			longhand: [
				'Январь',
				'Февраль',
				'Март',
				'Апрель',
				'Май',
				'Июнь',
				'Июль',
				'Август',
				'Сентябрь',
				'Октябрь',
				'Ноябрь',
				'Декабрь',
			],
		},
		today: 'Сегодня',
		clear: 'Очистить',
	},
	enableTime: true, // Увімкнути вибір часу
	noCalendar: false, // Показувати календар
	dateFormat: 'd.m.Y H:i', // Формат дати та часу
	time_24hr: true, // 24-годинний формат
	minDate: 'today', // Заборонити вибір минулих дат
})
