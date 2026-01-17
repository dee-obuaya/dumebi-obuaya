const stickyButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal-close');

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    modal.classList.add('is-open');
}

function closeModal() {
    modals.forEach(modal => {
        modal.classList.remove('is-open');
        modal.hidden = true;
    });

    document.body.style.overflow = '';
}

stickyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        openModal(btn.dataset.modal);
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

// Click outside modal content to close
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
