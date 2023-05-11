function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

let cost = document.querySelector('.movie-description__wrapper .description__list .description .cost');
let cost_text = cost.innerText;

if (cost) {
  cost.innerText = numberWithSpaces(cost_text);
}
