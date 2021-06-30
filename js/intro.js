window.addEventListener('DOMContentLoaded', function () {
	(function () {
		const stageElem = document.querySelector('.door-container');
		let currentItem = null;
		function doorHandler(e) {
			const targetElem = e.target;
			if (currentItem) {
				currentItem.classList.remove('door-opened');
			}

			if (targetElem.classList.contains('door-body')) {
				targetElem.parentNode.classList.add('door-opened');
				currentItem = targetElem.parentNode;
			}
		}
		stageElem.addEventListener('click', doorHandler);

		const doorArea = document.querySelector('.door');
		const door = document.querySelector('.door-back');
		const cursor = document.querySelector('.cursor');

		window.addEventListener('mousemove', e => {
			cursor.style.transform = `translate(${e.clientX - 25}px, ${
				e.clientY - 165
			}px)`;
			if (doorArea.classList.contains('door-opened')) {
				cursor.style.display = 'none';
				door.style.cursor = 'default';
			} else {
				cursor.style.display = 'block';
				door.style.cursor = 'pointer';
			}
		});
		// console.log(document.querySelector('.drop').getTotalLength());
	})();
});
