document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const loginButton = document.querySelector('.btnLogin-popup');
  const registerLink = document.querySelector('.register-link');
  const loginLink = document.getElementById('login-link');
  const closeIcon = document.querySelector('.icon-close');
  const registerForm = document.querySelector('.form-box.register');
  const loginForm = document.querySelector('.form-box.login');

  loginButton.addEventListener('click', () => {
    openLoginForm();
  });

  registerLink.addEventListener('click', (event) => {
    event.preventDefault();
    openRegisterForm();
  });

  loginLink.addEventListener('click', () => {
    openLoginForm();
  });

  closeIcon.addEventListener('click', () => {
    closePopUp();
  });

  function openLoginForm() {
    wrapper.classList.add('active-popup');
    document.body.style.overflow = 'hidden'; // Disable scrolling
    loginForm.style.display = 'block';
    registerForm.style.transform = 'translateX(100%)';
    loginLink.classList.add('login-active'); // Add active styling to the link
    registerLink.classList.remove('login-active'); // Remove active styling from the other link
  }

  function openRegisterForm() {
    wrapper.classList.add('active-popup');
    document.body.style.overflow = 'hidden'; // Disable scrolling
    loginForm.style.display = 'none';
    registerForm.style.transform = 'translateX(0)';
    loginLink.classList.remove('login-active'); // Remove active styling from the link
    registerLink.classList.add('login-active'); // Add active styling to the other link
  }

  function closePopUp() {
    wrapper.classList.remove('active-popup');
    document.body.style.overflow = 'auto'; // Enable scrolling
    loginLink.classList.remove('login-active'); // Remove active styling from the link
    registerLink.classList.remove('login-active'); // Remove active styling from the other link
  }
});