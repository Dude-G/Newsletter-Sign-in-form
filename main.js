

const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const email = emailInput.value.trim();
  const valid = /^\S+@\S+\.\S+$/.test(email);

  if (!valid) {
    errorMsg.style.display = "block";
    emailInput.classList.add("input-error");
  } else {
    errorMsg.style.display = "none";
    emailInput.classList.remove("input-error");


    console.log("Email valid:", email);
  }
});