const form = document.querySelector("#registration");
const pass = form.querySelector("#password");
const passConfirm = form.querySelector("#password_confirmation");
const output = form.querySelector("output");

form.addEventListener("change", (e) => {
  if (
    e.target.getAttribute("id") === "password" ||
    e.target.getAttribute("id") === "password_confirmation"
  ) {
    if (pass.value === passConfirm.value) {
      pass.setCustomValidity("");
      passConfirm.setCustomValidity("");
      output.classList.remove("no-match");
    } else {
      const message = "Passwords do not match.";
      pass.setCustomValidity(message);
      passConfirm.setCustomValidity(message);
      output.classList.add("no-match");
    }
  }
});
