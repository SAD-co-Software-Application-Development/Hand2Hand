'use strict';
/* eslint-disable */
let productArr =[];
let productsImages = ['blouse-Navy-blue.clothes.webp', 'blouse-silver.clothes.jpg','blouse-white.clothes.jpeg','bloyse-mixed-color.clothes.jpeg','bracelet.accessories.jpg','chicken-burger.cooking.jpg','Earring.accessories.webp','Fashion-jewelry.knitting.jpg','Facemask.knitting.jpeg','Sophie.woodcraft.jpg','Wool-cap.woolcraft.jpg','Chocolate-Cake.cooking.jpg']
let parent = document.getElementById('product')
let chosenToCart = [];

function loadLocal() {
  let stringData = localStorage.getItem('products');
  if(stringData){

    let loadedData = JSON.parse(stringData);
    chosenToCart = loadedData;
  }
}
loadLocal();

function Product(path, price, category= null, id){
    this.name=path.split('.')[0];
    this.path = './Images/Products/'+path;
    this.price = `${price} $`;
    this.category = path.split('.')[1];
    this.ordered = 1;
    this.id = id
    productArr.push(this)
}

Product.prototype.render = function (i){
let img = document.createElement('img');
parent.appendChild(img);
img.setAttribute('width','250px')
img.setAttribute('height','240px')
img.src = this.path
let btn = document.createElement('button');
parent.appendChild(btn);
btn.textContent ='add to cart';
btn.id = `bt${i+1}`;
btn.className = 'btnStyling'
let btnAdd = document.getElementById(`bt${i+1}`)
btnAdd.addEventListener('click', handleCart)
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function renderImages() {
    for (let index = 0; index < productsImages.length; index++) {
let random = getRandomIntInclusive(5,50)
      let current =  new Product(productsImages[index],random, index)
      current.render(index)

        
    }
}
renderImages()
// let btnAdd = document.getElementsByClassName('btnStyling')
// btnAdd.addEventListener('click', handleCart)


function handleCart(e){
    let chosenProduct = e.target.id;
    console.log(1111111,chosenProduct)
    chosenProduct = chosenProduct.split('t')[1]
    console.log(productArr)
    console.log(chosenProduct-1)
    console.log(22222222, productArr[chosenProduct-1])
console.log(chosenToCart)
    chosenToCart.push(productArr[chosenProduct-1])
    saveToLocalStorage()
}

function saveToLocalStorage(){
  let data = JSON.stringify(chosenToCart)
  localStorage.setItem('products',data)
}

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});
