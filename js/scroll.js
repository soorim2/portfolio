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
		console.log(scrollAnchor.attr);

		return false;
	});
	$(window)
		.scroll(function () {
			let windscroll = $(window).scrollTop();
			console.log(windscroll);
			if (windscroll >= 100) {
				$('.container section').each(function (i) {
					if ($(this).position().top <= windscroll - -41) {
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
