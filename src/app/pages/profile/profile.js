let isValid = true;
window.onload = loadData();

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function convertStringToDate(dateString) {
  const [day, month, year] = dateString.split("/");

  const formattedDate = new Date(year, month - 1, day);

  return formattedDate;
}

function validateDate(birthday) {
  const minDate = new Date("01-01-1900");
  const maxDate = new Date("05-11-2023");
  birthday = convertStringToDate(birthday);

  return birthday >= minDate && birthday <= maxDate;
}

function saveData(nickname, email, birthday, gender) {
  const myData = {
    nickname: nickname,
    email: email,
    birthday: birthday,
    gender: gender,
  };

  localStorage.setItem("stored-Data", JSON.stringify(myData));
  console.log("Data stored!");
}

function loadData() {
  console.log("Loading data...");
  const databank = JSON.parse(localStorage.getItem("stored-Data"));

  if (databank) {
    document.getElementById("showData").innerHTML = `
                <h1><strong>Data Stored as follow: </strong></h1>
                <p>Nickname: ${databank.nickname}</p>
                <p>Email: ${databank.email}.</p>
                <p>Birthday: ${databank.birthday}.</p>
                <p>Gender: ${databank.gender}.</p>
                `;
  }
}

document
  .getElementById("profile-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("email").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;

    if (!validateEmail(email)) {
      document.getElementById("email-error").style.display = "block";
      isValid = false;
    }

    if (!validateDate(birthday)) {
      document.getElementById("birthday-error").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      saveData(nickname, email, birthday, gender);
      loadData();
      $(".showData").fadeIn(2000);
    }
  });

$(document).ready(function () {
  $("birthday").mask("00/00/0000");
});
