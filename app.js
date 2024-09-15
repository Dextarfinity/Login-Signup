window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  
  // Keep loader visible for 3 seconds
  setTimeout(() => {
    loader.style.opacity = '0'; // Start fading out
    loader.style.transition = 'opacity 1s ease'; // Add transition for the fade-out effect

    // After the fade-out, set display to 'none' to hide the loader completely
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000); // Delay to match the fade-out duration (1 second)
    
  }, 3000); // 3000 milliseconds = 3 seconds
});


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container1");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});