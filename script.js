const searchsection = document.getElementById("search-section");
const searchicon = document.getElementById("search-icon-js");
const header = document.querySelector(".header");
const crossicon = document.getElementById("cross-icon");
const carticon = document.getElementById("cart-icon-js");
const cartcontent = document.getElementById("cart-content");
const cartclose = document.querySelector(".drawer__close");
const navicon = document.getElementById("nav-icon");
const naviconclick = document.querySelector(".nav-icon-click");
// const announcementbarsection = document.querySelector(".announcement-bar-section");

searchicon.addEventListener("click", (event) => {
  searchsection.style.display = "block";
  header.style.display = "none";
});
crossicon.addEventListener("click", (event) => {
  header.style.display = "grid";
  searchsection.style.display = "none";
  //  announcementbarsection.style.display = "flex";
});
carticon.addEventListener("click", (event) => {
  cartcontent.style.display = "flex";
});
cartclose.addEventListener("click", (event) => {
  cartcontent.style.display = "none";
});
navicon.addEventListener("click", (event) => {
  naviconclick.style.display = "block";
});
