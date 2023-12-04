document.getElementById("menu-button").onclick = function () {
  location.href = "/src/app/pages/menu/menu.html";
};

const requestBooks = () => {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "https://private-anon-6a24f90e00-bookstore.apiary-mock.com/books",
      dataType: "json",
      success: function (request) {
        resolve(request.books);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
};

for (let i = 0; i < 3; i++) {
  requestBooks().then((books) => {
    const title = books[i].title;
    const author = books[i].author;
    const summary = books[i].summary;

    const blocoHTML = `
      <div class="card w-[94%] bg-teal-light bg-opacity-60 rounded-md shadow-xl text-textColor mx-auto h-[25vmax] hidden card-fade-in">
        <div class="card-body">
          <h3>${title}</h3>
          <p class="truncate">
            ${summary}
          </p>
          <div class="card-actions justify-end">Author: ${author}</div>
        </div>
      </div>
    `;

    $("#authors-div").append(blocoHTML);
    $(".card-fade-in").last().fadeIn(2000);
  });
}


