'use strict';
/* eslint-disable */


let itemArray = [];

function loadLocal() {
  let stringData = localStorage.getItem('products');
  let loadedData = JSON.parse(stringData);
  itemArray = loadedData;
}
loadLocal();

function loadDataToCart() {
  let tableBody = document.getElementById('tableBody');
  tableBody.textContent=''
  for (let i = 0; i < itemArray.length; i++) {

    let trEl = document.createElement('tr');
    tableBody.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    let imgEl1 = document.createElement('img');
    tdEl1.appendChild(imgEl1);
    imgEl1.setAttribute('src',itemArray[i].path);

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = itemArray[i].price;

    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    let removeBtnEl = document.createElement('button');
    tdEl3.appendChild(removeBtnEl);
    removeBtnEl.textContent = '-'
    let pEl = document.createElement('p');
    tdEl3.appendChild(pEl);
    pEl.textContent = 1;
    let addBtnEl = document.createElement('button');
    tdEl3.appendChild(addBtnEl);
    addBtnEl.textContent= '+'


    let total = 0;
    total = itemArray[i].price.split(' ')[0] * Number(pEl.textContent);
    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = total;

    let tdEl5 = document.createElement('td');
    trEl.appendChild(tdEl5);
    let removeBtnEl1 = document.createElement('button');
    removeBtnEl1.textContent = 'Remove';
    removeBtnEl1.id = `del${i}`;
    removeBtnEl1.addEventListener('click', handleRemove)
    tdEl5.appendChild(removeBtnEl1);
    console.log(itemArray[i].price.split(' ')[0]);

  }
}
loadDataToCart();

function handleRemove(e){
  console.log(33333333333333,e.target.id)
  let deleteId = e.target.id;
  deleteId= deleteId.split('')[3];
  console.log(itemArray[deleteId])
  itemArray.splice(deleteId, 1)
  console.log(4444444444444,itemArray)
  localStorage.setItem('products', JSON.stringify(itemArray))
  loadLocal();
  loadDataToCart();
  // window.location.reload();
}

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});