'use strict';
/* eslint-disable */

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

let storeRedirect1 = document.getElementById('storeRedirect1')
let storeRedirect2 = document.getElementById('storeRedirect2')
let storeRedirect3 = document.getElementById('storeRedirect3')
let storeRedirect4 = document.getElementById('storeRedirect4')
let storeRedirect5 = document.getElementById('storeRedirect5')
let storeRedirect6 = document.getElementById('storeRedirect6')

storeRedirect1.addEventListener('click', fillterHandle)
storeRedirect2.addEventListener('click', fillterHandle)
storeRedirect3.addEventListener('click', fillterHandle)
storeRedirect4.addEventListener('click', fillterHandle)
storeRedirect5.addEventListener('click', fillterHandle)
storeRedirect6.addEventListener('click', fillterHandle)


function fillterHandle(e){
  e.preventDefault()
  
  window.location.href = "store.html";

}