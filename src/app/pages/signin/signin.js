let isValid = false;

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email-signin").value;
    const password = document.getElementById("password-signin").value;

    if (validateEmail(email) == true && validatePassword(password) == true) {
      isValid = true;
    }

    if (isValid) {
      console.log("Encaminhando");
      document.getElementById("button-signin").onclick = function () {
        location.href = "/src/app/pages/signin/signin.html";
      };
    }
  });
