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

  setTimeout(() => {
    loader.classList.add('fade-out'); 
    setTimeout(() => {
      loader.style.display = 'none'; 
    }, 1000); 
  }, 3000); 
});