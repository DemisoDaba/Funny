document.addEventListener('DOMContentLoaded', function () {
  const contactUsButton = document.querySelector('.ctc');
  const modal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');
  const contactForm = document.getElementById('contactForm');

  contactUsButton.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if the user provided email and message
    if (email && message) {
      // Handle the data (you can log it, send it to a server, etc.)
      console.log('Email:', email);
      console.log('Message:', message);

      // Close the modal after submitting
      modal.style.display = 'none';
    }
  });
});


const scrollRevealOption = {
  distance: '50px',
  origin: 'right',
  duration: 1000,
};

const InstructorScrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

// header container
ScrollReveal().reveal('.header__content h1', {
  ...scrollRevealOption,
});
ScrollReveal().reveal('.header__content p', {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.header__btn', {
  ...scrollRevealOption,
  delay: 1000,
});

// testimonial container
ScrollReveal().reveal('.testimonial__card', {
  ...scrollRevealOption,
  interval: 500,
});

// instructor container
ScrollReveal().reveal('.instructor__card', {
  ...InstructorScrollRevealOption,
  interval: 500,
});
