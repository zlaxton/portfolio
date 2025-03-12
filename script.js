// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save user preference in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙'; // Update toggle icon
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️'; // Set icon to sun if dark mode is enabled
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Search Functionality
function searchProjects() {
  const input = document.getElementById('searchBox').value.toLowerCase();
  const projects = document.querySelectorAll('.grid__item');

  projects.forEach(project => {
    const title = project.querySelector('h2').textContent.toLowerCase();
    const description = project.querySelector('p').textContent.toLowerCase();
    if (title.includes(input) || description.includes(input)) {
      project.style.display = '';
    } else {
      project.style.display = 'none';
    }
  });
}

document.getElementById('searchBox').addEventListener('input', searchProjects);

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  if (!email.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid email address.');
    return;
  }

  if (message.trim() === '') {
    e.preventDefault();
    alert('Please enter a message.');
    return;
  }

  // Simulate form submission success
  alert('Thank you for your message! I will get back to you soon.');
  this.reset(); // Clear the form
});

// Section Visibility on Scroll
const sections = document.querySelectorAll('section');

const checkVisibility = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Initial check on page load
checkVisibility();

// Add fade-in animation for sections
const fadeInSections = () => {
  sections.forEach(section => {
    if (section.classList.contains('visible')) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', fadeInSections);
window.addEventListener('resize', fadeInSections);

// Initial fade-in on page load
fadeInSections();