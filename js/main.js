gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.2,
		effects: true,
	})

	gsap.registerPlugin(ScrollTrigger)

	// Анімація для тексту (з’являється першим)
	gsap.fromTo(
		'.decision__text',
		{ x: -500 },
		{
			opacity: 1,
			x: 0,
			duration: 3.5,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.decision__text',
				start: 'top 98%',
				end: 'top 85%',
				scrub: true,
			},
		}
	)

	// Анімація для заголовка (з’являється після тексту)
	gsap.fromTo(
		'.decision__title',
		{ x: -500 },
		{
			opacity: 1,
			x: 0,
			duration: 5.5,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.decision__content',
				start: 'top 85%',
				end: 'top 15%',
				scrub: true,
			},
		}
	)

	// Анімація для картинки (виїжджає справа)
	gsap.fromTo(
		'.decision__img',
		{ x: 70, clipPath: 'inset(0% 0% 0% 100%)' },
		{
			x: 0,
			clipPath: 'inset(0% 0% 0% 0%)',
			duration: 1.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.decision__img',
				start: 'top 55%',
				end: 'top 5%',
				scrub: true,
			},
		}
	)

	gsap.fromTo(
		'.decision-border',
		{ scaleX: 0, transformOrigin: 'left center' }, // Початковий стан (невидимий)
		{
			scaleX: 1, // Повне відображення
			scrollTrigger: {
				trigger: '.decision-border',
				start: 'top 80%', // Коли з'являється у вікні
				end: 'top 30%', // Коли завершує ефект
				scrub: true,
			},
		}
	)
	// Заголовок виїжджає зліва
	gsap.fromTo(
		'.history__title',
		{ y: '100%' },
		{
			opacity: 1,
			y: '0%',
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.history__title',
				start: 'top 80%',
				end: 'top 50%',
				scrub: true,
			},
		}
	)

	// Тексти з'являються поступово
	gsap.utils.toArray('.history__info-text').forEach((text, index) => {
		gsap.fromTo(
			text,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: text,
					start: 'top 85%',
					end: 'top 40%',
					scrub: true,
				},
			}
		)
	})

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.nowadays__top',
		start: 'top 90%',
		end: 'top 50%',
		scrub: 1,
	},
})

tl.to('.nowadays__title', {
	x: 0,
	opacity: 1,
	duration: 1.5,
	ease: 'power4.out',
}).to(
	'.nowadays__text-top',
	{
		y: 0,
		opacity: 1,
		duration: 1.5,
		ease: 'power4.out',
	},
	'-=1'
) // Починає анімацію трохи швидше

// Окремий тригер для .nowadays__text-bottom
gsap.fromTo(
	'.nowadays__text-bottom',
	{ y: 50, opacity: 0 }, // Початковий стан: зміщене вниз і прозоре
	{
		y: 0,
		opacity: 1,
		duration: 1.5,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: '.nowadays__text-bottom',
			start: 'top 90%',
			end: 'top 50%',
			scrub: 1,
		},
	}
)

	// Плавна анімація картинки (виїжджає зверху вниз)
	let img = document.querySelector('.nowadays__img img')

	gsap.to(img, {
		opacity: 1,
		clipPath: 'circle(100% at center)',
		scrollTrigger: {
			trigger: img,
			start: 'top 80%',
			end: 'top 50%',
			scrub: true,
		},
	})
}


gsap.utils.toArray('.history__info-text').forEach(text => {
	text.style.overflow = 'hidden' // Ховаємо вихідний текст для ефекту "з-за стіни"

	if (text.classList.contains('history__info-text--left')) {
		// Лівий текст випливає зліва
		gsap.fromTo(
			text,
			{ x: '-100%' },
			{
				x: '0%',
				duration: 1.5,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: text,
					start: 'top 85%',
					end: 'top 40%',
					scrub: true,
				},
			}
		)
	} else if (text.classList.contains('history__info-text--right')) {
		// Правий текст випливає справа
		gsap.fromTo(
			text,
			{ x: '100%' },
			{
				x: '0%',
				duration: 1.5,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: text,
					start: 'top 85%',
					end: 'top 40%',
					scrub: true,
				},
			}
		)
	} else {
		// Центральний текст піднімається знизу
		gsap.fromTo(
			text,
			{ y: '100%' },
			{
				y: '0%',
				duration: 1.5,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: text,
					start: 'top 85%',
					end: 'top 40%',
					scrub: true,
				},
			}
		)
	}
})








////////////////////////////////////////////////////////////////



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
document.addEventListener('DOMContentLoaded', function () {
	gsap.to('.header__title span', {
		opacity: 1,
		y: 0,
		duration: 0.8,
		ease: 'power2.out',
		stagger: 0.1, // Плавна поява кожної букви
	})
})

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
