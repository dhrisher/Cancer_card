const advanced_search_popup = document.querySelector(".popup-container");
const advanced_search_btn = document.querySelector(".advanced-search");
const page_container = document.querySelector(".page-container");




//listeners

advanced_search_btn.addEventListener('click', function() {
  advanced_search_popup.style.display = "flex";
  page_container.style.display = "none";
});