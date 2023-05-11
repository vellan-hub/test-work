let sortListButton = document.querySelector('.sort__list-title-wrapper');
let sortListTitle = document.querySelector(".sort__list-title");


if (sortListButton) {
  sortListButton.addEventListener("click", () => {
    sortListButton.classList.toggle("active");

    let sortListRadio = document.querySelectorAll(
      '.sort__list input[type="radio"]'
    );
    let sortListLabel = document.querySelectorAll(
      '.sort__list input[type="radio"]+label'
    );

    for (let i = 0; i < sortListRadio.length; i++) {
      sortListRadio[i].addEventListener("change", () => {
        sortListTitle.textContent = sortListLabel[i].textContent;
        sortListButton.classList.remove("active");
      });
    }
  });
}
