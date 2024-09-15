window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  
  // Ensure the loader stays visible for at least 3 seconds
  setTimeout(() => {
    // Start fade-out transition
    loader.classList.add('hidden');
    
    // After fade-out completes (1s), hide the loader completely
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000); // This matches the CSS transition time (1s)
  }, 3000); // Keep loader for 3 seconds
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