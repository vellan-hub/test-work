let filterHeader = document.querySelectorAll(
  ".filter .filter__wrapper .filter__header"
);

for (let j = 0; j < filterHeader.length; j++) {
  filterHeader[j].addEventListener("click", () => {
    filterHeader[j].classList.toggle("active");
  });
}

let variationsMore = document.querySelectorAll(".variations__more");
let variations = document.querySelectorAll(".variations__checkbox");

for (let k = 0; k < variationsMore.length; k++) {
  variationsMore[k].addEventListener("click", () => {
    variations[k].classList.add("active");
  });
}

let filterButton = document.querySelector(".main-filter__wrapper");
let filterContainer = document.querySelector(".sidebar-filter");
let filterSubmit = document.querySelectorAll(
  '.filter__buttons input[type="submit"]'
);
let overlayFilter = document.querySelector(".overlay__filter");

if (filterButton) {
  filterButton.addEventListener("click", () => {
    filterContainer.classList.toggle("active");
  });
}

for (let i = 0; i < filterSubmit.length; i++) {
  filterSubmit[i].addEventListener("click", () => {
    filterContainer.classList.remove("active");
  });
}

if (overlayFilter) {
  overlayFilter.addEventListener("click", () => {
    filterContainer.classList.remove("active");
    overlayFilter.classList.remove("active");
  });
}
