'use strict';
/* eslint-disable */

let total
let totalOfTotals = 0
let itemArray = [];

function loadLocal() {
  let stringData = localStorage.getItem('products');
  let loadedData = JSON.parse(stringData);
  itemArray = loadedData;
}
loadLocal();

function loadDataToCart() {
  let tableBody = document.getElementById('tableBody');
  tableBody.textContent = ''
  totalOfTotals = 0
  if(itemArray != null){
  for (let i = 0; i < itemArray.length; i++) {

    let trEl = document.createElement('tr');
    tableBody.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    let imgEl1 = document.createElement('img');
    tdEl1.appendChild(imgEl1);
    imgEl1.setAttribute('src', itemArray[i].path);

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = itemArray[i].price;

    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);

    let removeBtnEl = document.createElement('button');
    tdEl3.appendChild(removeBtnEl);
    // removeBtnEl.textContent = '-'

    let minusIcon = document.createElement('i');
    minusIcon.className = "fas fa-minus-circle fa-2x"
    removeBtnEl.appendChild(minusIcon)

    removeBtnEl.addEventListener('click', removeQuantity)
    function removeQuantity(e) {
      if (pEl.textContent === '1') {
        console.log(itemArray[i].ordered, pEl.textContent)
        pEl.textContent = itemArray[i].ordered
        removeBtnEl.removeEventListener('click', removeQuantity)
      } else {
        itemArray[i].ordered--
        pEl.textContent = itemArray[i].ordered
        total = itemArray[i].price.split(' ')[0] * Number(pEl.textContent);
        tdEl4.textContent = `${total} $`;
        totalOfTotals -=total/itemArray[i].ordered
    tdEl7.textContent = `${totalOfTotals} $`

        saveToLocalStorage()
       

        console.log(itemArray[i].ordered, pEl.textContent)
      }
    }

    let pEl = document.createElement('p');
    tdEl3.appendChild(pEl);
    pEl.textContent = itemArray[i].ordered;
    itemArray[i].ordered = pEl.textContent

    let addBtnEl = document.createElement('button');
    tdEl3.appendChild(addBtnEl);
    // addBtnEl.textContent = '+' 

    let plusIcon = document.createElement('i');
    plusIcon.className = "fas fa-plus-circle fa-2x"
    addBtnEl.appendChild(plusIcon)

    addBtnEl.addEventListener('click', addQuantity)
    function addQuantity(e) {
      removeBtnEl.addEventListener('click', removeQuantity)
      itemArray[i].ordered++
      pEl.textContent = Number(itemArray[i].ordered)
      total = itemArray[i].price.split(' ')[0] * Number(pEl.textContent);
      tdEl4.textContent = `${total} $`;
      totalOfTotals +=total/itemArray[i].ordered
    tdEl7.textContent = `${totalOfTotals} $`
      
      saveToLocalStorage()

      console.log(itemArray[i].ordered, pEl.textContent, total)

    }



    total = itemArray[i].price.split(' ')[0] * Number(pEl.textContent);
    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = `${total} $`;
    totalOfTotals += total

    let tdEl5 = document.createElement('td');
    trEl.appendChild(tdEl5);
    let removeBtnEl1 = document.createElement('button');
    // removeBtnEl1.textContent = 'asda';
    let removeIcone = document.createElement('i')
    removeIcone.className = 'fas fa-trash-alt fa-2x'
    removeBtnEl1.appendChild(removeIcone)
    removeIcone.id = `rem${i}`
    removeBtnEl1.id = `del${i}`;
    // removeBtnEl1.className = ''
    removeBtnEl1.addEventListener('click', handleRemove)
    tdEl5.appendChild(removeBtnEl1);
    console.log(itemArray[i].price.split(' ')[0]);
    

    

  }
}
  let tableFooter = document.getElementById('tableFooter')
    tableFooter.textContent = ""

    let trEl1 = document.createElement('tr');
    tableFooter.appendChild(trEl1);

    let tdEl8 = document.createElement('td');
    trEl1.appendChild(tdEl8);

    let tdEl6 = document.createElement('td');
    trEl1.appendChild(tdEl6);
    tdEl6.textContent = 'TOTAL OF TOTALS'
    
    let tdEl9 = document.createElement('td');
    trEl1.appendChild(tdEl9);

    let tdEl7 = document.createElement('td');
    trEl1.appendChild(tdEl7);
    tdEl7.textContent = `${totalOfTotals} $`

    let tdEl10 = document.createElement('td');
    trEl1.appendChild(tdEl10);
}
loadDataToCart();



function handleRemove(e) {
  console.log(33333333333333, e.target.id)
  let deleteId = e.target.id;
  deleteId = deleteId.split('')[3];
  console.log(itemArray[deleteId])
  itemArray.splice(deleteId, 1)
  console.log(4444444444444, itemArray)
  localStorage.setItem('products', JSON.stringify(itemArray))
  loadLocal();
  loadDataToCart();
  // totalOfTotals = total
  console.log(totalOfTotals,total)
  // window.location.reload();
}

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});

function saveToLocalStorage(){
  let data = JSON.stringify(itemArray)
  localStorage.setItem('products',data)
}


let cancel = document.getElementById('cancel');
cancel.addEventListener('click', buyAllItems );

function buyAllItems(event) {
  let clearTable = document.getElementById('tableBody');
  clearTable.textContent = "";
  localStorage.clear()
  itemArray = [];
  loadDataToCart();
  window.location.href="store.html";
}






var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buy");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}