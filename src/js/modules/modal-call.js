function modal() {
	const dialog = document.querySelector('.dialog');
	const openModal = document.querySelector('.modal-call');
	const closeModal = dialog.querySelector('.close-btn');

	function openModalBlockScroll() {
		dialog.showModal();
		document.body.classList.add('no-scroll');
	}

	function returnScroll() {
		document.body.classList.remove('no-scroll');
	}

	function close() {
		dialog.close();
		returnScroll();
	}

	openModal.addEventListener('click', openModalBlockScroll);
	closeModal.addEventListener('click', close);

	function closeOverlayClick({ currentTarget, target }) {
		const dialog = currentTarget;
		const isOnOverlayClick = target === dialog;
		if (isOnOverlayClick) {
			close();
		}
	}
	dialog.addEventListener('click', closeOverlayClick);
	dialog.addEventListener('cancel', returnScroll);
}

export default modal;
