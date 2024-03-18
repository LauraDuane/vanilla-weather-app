/** @format */
function handleSearchSubmit(event) {
  event.preventDefault();
}

let searchInputElement = document.querySelector("#search-input");
searchInputElement.addEventListener("submit", handleSearchSubmit);

console.log(searchInputElement);
