// Модальное окно
modalButton = document.querySelector('#modal');
closeButton = document.querySelector('#close');
modal = document.querySelector('dialog');

closeButton.addEventListener('click', () => {
  if (modal) {
    modal.close();
  }
});

modalButton.addEventListener('click', () => {
  if (modal) {
    modal.showModal();
  }
});

// Вкладки
tabs = document.querySelectorAll('.tab');
content = document.querySelectorAll('.content');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    content.forEach(c => c.classList.remove('active'));
    content[i].classList.add('active');
  });
});
