// FAQ accordion: one item opens at a time for readability.
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    faqButtons.forEach((otherButton) => {
      otherButton.setAttribute('aria-expanded', 'false');
      const otherAnswer = otherButton.nextElementSibling;
      if (otherAnswer) {
        otherAnswer.style.maxHeight = '0px';
      }
    });

    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      const answer = button.nextElementSibling;
      if (answer) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    }
  });
});

// Subtle reveal animation on scroll.
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealElements.forEach((element) => revealObserver.observe(element));
