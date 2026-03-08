// script.js — Обновлённая версия: без обложек (удалены все ссылки на изображения)

document.addEventListener('DOMContentLoaded', () => {
  // Форма отправки книги — submit.html
  const form = document.getElementById('bookForm');
  const successMessage = document.getElementById('successMessage');

  if (form && successMessage) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const why = document.getElementById('why').value;

      // В реальном проекте здесь был бы fetch() к бэкенду
      console.log('Книга добавлена:', { title, author, why });

      // Сбрасываем форму
      form.reset();

      // Показываем сообщение об успехе
      successMessage.classList.remove('hidden');

      // Скрываем через 5 секунд
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);
    });
  }

  // Анимация при прокрутке — плавное появление блоков
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.book-card, .daily-book, .contact-info, .team');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  // Инициализируем прозрачность
  document.querySelectorAll('.book-card, .daily-book, .contact-info, .team').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Запускаем при прокрутке
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Проверяем сразу при загрузке

  
  // Фильтрация книг по категории
document.getElementById('category-filter').addEventListener('change', function() {
  const selectedCategory = this.value;
  const bookCards = document.querySelectorAll('.book-card');

  bookCards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (selectedCategory === 'all' || category === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});


  // Плавная прокрутка по якорям
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
