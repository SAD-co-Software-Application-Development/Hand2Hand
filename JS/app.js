'use strict';

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});
let itemArray =[];
function loadLocal() {
  let stringData = localStorage.getItem('products');
  let loadedData = JSON.parse(stringData);
  itemArray = loadedData;
  if (itemArray) {

    let cartNo = document.getElementById('cartNo')
    cartNo.textContent = `${itemArray.length} `
  }else{
    let cartNo = document.getElementById('cartNo')
    cartNo.textContent = `0`
  }
}
loadLocal();
