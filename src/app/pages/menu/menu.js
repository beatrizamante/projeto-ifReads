const storedData = localStorage.getItem("stored-Data");
let userData = {
  nickname: "Anonymous",
  gender: "Fucker",
};

if (storedData) {
  userData = JSON.parse(storedData);
  console.log("Valor recuperado:", userData);
} else {
  console.log('Nenhum valor encontrado para a chave "stored-Data"');
}

document.getElementById(
  "my-nickname"
).innerHTML = `${userData.nickname}, ${userData.gender}`;

document.getElementById("menu-button").onclick = function () {
  location.href = "/src/app/pages/index/index.html";
};

document.getElementById("my-profile").onclick = function () {
  location.href = "/src/app/pages/profile/profile.html";
};
