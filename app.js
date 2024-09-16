// Loader
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => {
        loader.style.display = 'none';
        // Initialize ScrollReveal after the loader is hidden
        initScrollReveal();
      }, 1000); // Matches CSS transition duration
    }, 3000); // Keep the loader visible for at least 3 seconds
  } else {
    console.error("Loader element not found.");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container1");

  if (sign_up_btn && sign_in_btn && container) {
    // Switch to Sign Up form
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    // Switch to Sign In form
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  } else {
    console.error("Some elements are missing for form toggling.");
  }

  // Form validation for Sign In
  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearMessages(); // Clear any previous error or success messages
      clearErrors(); // Clear any previous error messages

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      let valid = true;

      if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
      }

      if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters long.');
        valid = false;
      }

      if (valid) {
        // Show success message and redirect to sample.html
        showSuccessModal('Login successful! Redirecting...', 'sample.html');
      }
    });
  } else {
    console.error("Sign-in form not found.");
  }

  // Form validation for Sign Up
  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearMessages(); // Clear any previous error or success messages
      clearErrors(); // Clear any previous error messages

      const email = document.getElementById('emailSignUp').value;
      const password = document.getElementById('passwordSignUp').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      let valid = true;

      // Email validation
      if (!validateEmail(email)) {
        showError('emailSignUp', 'Please enter a valid email address.');
        valid = false;
      }

      // Password validation with regex
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(password)) {
        showError('passwordSignUp', 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
        valid = false;
      }

      // Confirm Password validation
      if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match.');
        valid = false;
      }

      if (valid) {
        // Show success modal and redirect
        showSuccessModal('Sign-up successful! Redirecting you to our sign-up page.', 'index.html');
      }
    });
  } else {
    console.error("Sign-up form not found.");
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Function to show error messages
function showError(inputId, message) {
  const input = document.getElementById(inputId);
  if (input) {
    const parent = input.parentElement;
    const existingError = parent.querySelector('.error-message');

    if (!existingError) {
      const errorElement = document.createElement('small');
      errorElement.classList.add('error-message');
      errorElement.innerText = message;
      parent.appendChild(errorElement);
    } else {
      existingError.innerText = message;
    }
  }
}

// Function to show success modal and handle redirect
function showSuccessModal(message, redirectUrl) {
  try {
    // Set the message text for the modal
    const modalMessage = document.getElementById('modalMessage');
    if (!modalMessage) {
      throw new Error('Modal message element not found');
    }
    modalMessage.innerText = message;

    // Show the modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    // Handle redirection after modal is confirmed
    const confirmBtn = document.getElementById('modalConfirmBtn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 2000); // Redirect after 2 seconds
      });
    } else {
      throw new Error('Confirm button not found');
    }

  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

// Function to clear error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => error.remove()); // Remove all error messages
}

// Function to clear success or error messages
function clearMessages() {
  const successMessages = document.querySelectorAll('.success-message');
  successMessages.forEach(success => success.remove()); // Remove all success messages
}
