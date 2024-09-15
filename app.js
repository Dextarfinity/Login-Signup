const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container1");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  
  // Keep loader visible for 3 seconds
  setTimeout(() => {
    loader.style.display = 'none'; // Hides the loader after 3 seconds
  }, 3000); // 3000 milliseconds = 3 seconds
});