'use strict';
let cartTable = document.getElementById('cartTable');

let itemArray = [];

function loadLocal() {
  let stringData = localStorage.getItem('items');
  let loadedData = JSON.parse(stringData);
  itemArray = loadedData;
}
loadLocal();

function loadDataToCart() {
  for (let i = 0; i < itemArray.length; i++) {

    let trEl = document.createElement('tr');
    cartTable.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    let imgEl1 = document.createElement('img');
    tdEl1.appendChild(imgEl1);
    imgEl1.setAttribute('src',itemArray[i].itemURL);

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = itemArray[i].itemPrice;

    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    let removeBtnEl = document.createElement('button');
    tdEl3.appendChild(removeBtnEl);
    let pEl = document.createElement('p');
    tdEl3.appendChild(pEl);
    pEl.textContent = 10;
    let addBtnEl = document.createElement('button');
    tdEl3.appendChild(addBtnEl);


    let total = 0;
    total = itemArray[i].itemPrice.split(' ')[0] * Number(pEl.textContent);
    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = total;

    let tdEl5 = document.createElement('td');
    trEl.appendChild(tdEl5);
    let removeBtnEl1 = document.createElement('button');
    tdEl5.appendChild(removeBtnEl1);
    console.log(itemArray[i].itemPrice.split(' ')[0]);
  }
}
loadDataToCart();

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});
