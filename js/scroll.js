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
	// console.log(windscroll);
	$('html, body').on('mousewheel DOMMouseScroll', function (e) {
		e.preventDefault();
		let windscroll = $(window).scrollTop();
		const workSection = $('[data-anchor="work"]').offset().top - 40;
		if (windscroll <= 850) {
			let ev = e.originalEvent;
			delta = 0;
			if (ev.detail) {
				delta = ev.detail * -40;
				if (delta < 0) {
					console.log('스크롤 내림');
					$('body,html').animate(
						{
							scrollTop: workSection,
						},
						800
					);
				} else {
					console.log('스크롤 올림');
					$('body,html').animate(
						{
							scrollTop: 0,
						},
						800
					);
				}
			} else {
				delta = ev.wheelDelta;
				if (delta < 0) {
					console.log('스크롤 내림');
					$('body,html').animate(
						{
							scrollTop: workSection,
						},
						800
					);
				} else {
					console.log('스크롤 올림');
					$('body,html').animate(
						{
							scrollTop: 0,
						},
						800
					);
				}
			}
		}
		// console.log(windscroll);
	});
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

	// $('#nav1').click(function () {
	// 	$('html,body').animate(
	// 		{
	// 			scrollTop: $('header').offset().top,
	// 		},
	// 		300
	// 	);
	// });

	// $('#nav2').click(function () {
	// 	$('html,body').animate(
	// 		{
	// 			scrollTop: $('#work').offset().top,
	// 		},
	// 		300
	// 	);
	// });

	// $('#nav3').click(function () {
	// 	$('html,body').animate(
	// 		{
	// 			scrollTop: $('#skill').offset().top,
	// 		},
	// 		300
	// 	);
	// });
});
