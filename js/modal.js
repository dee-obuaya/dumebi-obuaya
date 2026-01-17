const overlay = document.querySelector('.modal-overlay');
const stickyButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal-close');

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  overlay.hidden = false;
  modal.hidden = false;

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.hidden = true;
  modals.forEach(m => (m.hidden = true));

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

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
