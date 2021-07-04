$(document).ready(function () {
	// const intro = document.querySelector('#intro');
	// const work = document.querySelector('#work');
	// const skill = document.querySelector('#skill');

	// const introTop = intro.offsetTop;
	// const workTop = work.offsetTop;
	// const skillTop = skill.offsetTop;

	// let introPosY = intro.getBoundingClientRect().top;
	// let workPosY = work.getBoundingClientRect().top;
	// let skillPosY = skill.getBoundingClientRect().top;

	// const menuItem1 = document.querySelector('#nav1');
	// const menuItem2 = document.querySelector('#nav2');
	// const menuItem3 = document.querySelector('#nav3');

	$('#nav a').on('click', function () {
		const scrollAnchor = $(this).attr('data-scroll'),
			scrollPoint = $('[data-anchor="' + scrollAnchor + '"]').offset().top - 41;

		$('body,html').animate(
			{
				scrollTop: scrollPoint,
			},
			500
		);
		return false;
	});

	// $('html, body').on('mousewheel DOMMouseScroll', function (e) {
	// 	e.preventDefault();
	// 	let windscroll = $(window).scrollTop();
	// 	const workSection = $('[data-anchor="work"]').offset().top - 40;
	// 	if (windscroll <= 850) {
	// 		let ev = e.originalEvent;
	// 		delta = 0;
	// 		if (ev.detail) {
	// 			delta = ev.detail * -40;
	// 			if (delta < 0) {
	// 				console.log('스크롤 내림');
	// 				$('body,html').animate(
	// 					{
	// 						scrollTop: workSection,
	// 					},
	// 					800
	// 				);
	// 			} else {
	// 				console.log('스크롤 올림');
	// 				$('body,html').animate(
	// 					{
	// 						scrollTop: 0,
	// 					},
	// 					800
	// 				);
	// 			}
	// 		} else {
	// 			delta = ev.wheelDelta;
	// 			if (delta < 0) {
	// 				console.log('스크롤 내림');
	// 				$('body,html').animate(
	// 					{
	// 						scrollTop: workSection,
	// 					},
	// 					800
	// 				);
	// 			} else {
	// 				console.log('스크롤 올림');
	// 				$('body,html').animate(
	// 					{
	// 						scrollTop: 0,
	// 					},
	// 					800
	// 				);
	// 			}
	// 		}
	// 	}
	// 	// console.log(windscroll);
	// });

	$(window)
		.scroll(function () {
			let windscroll = $(window).scrollTop();
			if (windscroll >= 0) {
				$('.container section').each(function (i) {
					if ($(this).position().top <= windscroll - -42) {
						$('#nav li.active').removeClass('active');
						$('#nav li').eq(i).addClass('active');
						$('#title p.active').removeClass('active');
						$('#title p').eq(i).addClass('active');
					}
				});
			} else {
				$('#nav li.active').removeClass('active');
				$('#nav li:first').addClass('active');
				$('#title p.active').removeClass('active');
				$('#title p:first').addClass('active');
			}
		})
		.scroll();

	window.addEventListener('wheel', e => {
		let direction = '';
		// e.preventDefault;
		let windscroll = window.pageYOffset;
		const workSection = document.querySelector('#work').offsetTop - 40;
		if (windscroll <= workSection) {
			if (e.deltaY > 0) {
				if (direction !== 'down') {
					// console.log(direction);
					direction = 'down';
					window.scrollTo({
						top: workSection,
						left: 0,
						behavior: 'smooth',
					});
					// console.log(windscroll);
					// console.log(workSection);
				}
			}
		} else {
			if (e.deltaY < 0) {
				if (direction !== 'up') {
					// console.log(direction);
					direction = 'up';
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
					// console.log(windscroll);
					// console.log(workSection);
				}
			}
		}
	});
});
