document.getElementById("menu-button").onclick = function () {
  location.href = "/src/app/pages/menu/menu.html";
};

let isValid = true;
// window.onload = loadData();

$(document).ready(function () {
  $("#birthday").mask("00/00/0000");
});

// function validateEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

function convertStringToDate(dateString) {
  // console.log(birthday);
  const [day, month, year] = dateString.split("/");

  const formattedDate = new Date(year, month - 1, day);

  return formattedDate;
}

function validateDate(birthday) {
  const minDate = new Date("01-01-1900");
  const maxDate = new Date("07-12-2023");
  birthday = convertStringToDate(birthday);

  return birthday >= minDate && birthday <= maxDate;
}

function saveData(nickname, birthday, gender) {
  const myData = {
    nickname: nickname,
    birthday: birthday,
    gender: gender,
  };

  localStorage.setItem("stored-Data", JSON.stringify(myData));
  console.log("Data stored!");
}

// function loadData() {
//   console.log("Loading data...");
//   const databank = JSON.parse(localStorage.getItem("stored-Data"));
// }

document
  .getElementById("profile-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nickname = document.getElementById("nickname").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender-query").value;

    // if (!validateEmail(email)) {
    //   isValid = false;
    // }

    if (!validateDate(birthday)) {
      alert("Invalid information, try again!");
      console.log("Invalid");
      return;
    }

    if (isValid) {
      console.log("Saving!");
      saveData(nickname, birthday, gender);
      alert("Data saved!");
      // loadData();
    }
  });
