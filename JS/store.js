'use strict';
/* eslint-disable */
let productArr = [];
let productsImages = ['wooden-shelf.woodcraft.jpg','women-purse.accessories.jfif','Hair-Jewelry.accessories.jpg','wallet.accessories.jpg','vase.pottery.jpg','tray.woodcraft.png','teapot.pottery.jfif','table.woodcraft.jpg','sweet.food.jpg','sweater.knitting.jfif','square-plates.woodcraft.jfif','snowman.woodcraft.jpg','scarf.knitting.jfif','ring.accessories.jfif','pickle.food.jpg',
'photo-frame.woodcraft.jfif','mag.pottery.jfif','jam.food.jfif','headband-flower.accessories.jpg','hair-pin.accessories.jpg','grape-leaves.food.jpg','gloves.knitting.jpg','glass.pottery.jfif',
  'flower-vasa.pottery.jpg','face-mask.knitting.jfif','earrings.accessories.jpg','clock.woodcraft.jpg','cape.knitting.jpg','cabbage.food.png','bracelet.accessories.jpg','bag.accessories.jpg',
  'baby.knitting.jfif','anklet.accessories.jpg']
let parent = document.getElementById('product')
let chosenToCart = [];

function loadLocal() {
  let stringData = localStorage.getItem('products');
  if (stringData) {

    let loadedData = JSON.parse(stringData);

    chosenToCart = loadedData;
    let cartNo = document.getElementById('cartNo')
    cartNo.textContent = `${chosenToCart.length} `
  }else{
    let cartNo = document.getElementById('cartNo')
    cartNo.textContent = `0`
  }
}
loadLocal();
console.log(chosenToCart)
function Product(path, price, category = null, id) {
  this.name = path.split('.')[0];
  this.path = './Images/Products/' + path;
  this.price = `${price} $`;
  this.category = path.split('.')[1];
  this.ordered = 1;
  this.id = id
  productArr.push(this)
}

Product.prototype.render = function (i) {
let divContianer = document.createElement('div')
divContianer.className = "imageContainer"
parent.appendChild(divContianer)
divContianer.setAttribute('display','flex')

  let img = document.createElement('img');
  divContianer.appendChild(img);
  img.setAttribute('width', '250px')
  img.setAttribute('height', '240px')
  img.src = this.path
  let btn = document.createElement('button');
  divContianer.appendChild(btn);
  btn.textContent = 'add to cart';
  btn.id = `bt${i + 1}`;
  btn.className = 'btnStyling'
  let btnAdd = document.getElementById(`bt${i + 1}`)
  btnAdd.addEventListener('click', handleCart)

  let namePEl = document.createElement('p')
  divContianer.appendChild(namePEl)
  namePEl.textContent = `Product : ${this.name}`
  namePEl.className = "nameParagraph"

  let ratingDiv = document.createElement('div')
  ratingDiv.className="ratingDiv"
  divContianer.appendChild(ratingDiv)

  let starEl = document.createElement('i')
  starEl.className = "fa fa-star"
  ratingDiv.appendChild(starEl)

  let starEl1 = document.createElement('i')
  starEl1.className = "fa fa-star"
  ratingDiv.appendChild(starEl1)

  let starEl2 = document.createElement('i')
  starEl2.className = "fa fa-star"
  ratingDiv.appendChild(starEl2)

  let starEl3 = document.createElement('i')
  starEl3.className = "fa fa-star"
  ratingDiv.appendChild(starEl3)

  let starEl4 = document.createElement('i')
  starEl4.className = "fa fa-star-o"
  ratingDiv.appendChild(starEl4)

  let pricePEl = document.createElement('p')
  divContianer.appendChild(pricePEl)
  pricePEl.textContent = `Price : ${this.price}`
  pricePEl.className = "priceParagraph"

 

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function renderImages() {
  for (let index = 0; index < productsImages.length; index++) {
    let random = getRandomIntInclusive(5, 50)
    let current = new Product(productsImages[index], random, index)
    current.render(index)
  }
}
renderImages()


function handleCart(e) {
  let chosenProduct = e.target.id;
  chosenProduct = chosenProduct.split('t')[1]
  if (chosenToCart.length > 0) {
    
    // console.log(11111)

    for (let i = 0; i < chosenToCart.length; i++) {
    // console.log(2222)

      if (chosenToCart[i].name == productArr[chosenProduct - 1].name) {
    // console.log(33333)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "It's already in the cart!",
    })
        //do nothing
        break
      }else if(i == chosenToCart.length - 1){
    // console.log(44444)
        
        chosenToCart.push(productArr[chosenProduct - 1])
        saveToLocalStorage()
        let cartNo = document.getElementById('cartNo')
cartNo.textContent = `${chosenToCart.length}`
break
      }
      // console.log(66666)

    }

  } else {
    // console.log(5555, chosenToCart.indexOf(productArr[chosenProduct - 1]))
    chosenToCart.push(productArr[chosenProduct - 1])
    saveToLocalStorage()
    let cartNo = document.getElementById('cartNo')
cartNo.textContent = `${chosenToCart.length}`
  }
}

function saveToLocalStorage() {
  let data = JSON.stringify(chosenToCart)
  localStorage.setItem('products', data)
}

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});

let allItems = document.getElementById('allItems')
allItems.addEventListener('click',allItemsHandel)

function allItemsHandel(e){
  parent.textContent = ""
  renderImages()
}

let knittingItem = document.getElementById('knitting')
knitting.addEventListener('click',knittingHandel)

function knittingHandel(e){
  parent.textContent = ""
  function renderKnitting() {
    for (let index = 0; index < productsImages.length; index++) {
      
      let random = getRandomIntInclusive(5, 50)
      let current = new Product(productsImages[index], random, index)
      console.log(current)
      if(current.category == 'knitting'){

        current.render(index)
      }
    }
  }
  renderKnitting()
  
}

let woodcraftItem = document.getElementById('woodcraft')
woodcraft.addEventListener('click',woodcraftHandel)

function woodcraftHandel(e){
  parent.textContent = ""
  function renderwoodcraft() {
    for (let index = 0; index < productsImages.length; index++) {
      
      let random = getRandomIntInclusive(5, 50)
      let current = new Product(productsImages[index], random, index)
      console.log(current)
      if(current.category == 'woodcraft'){

        current.render(index)
      }
    }
  }
  renderwoodcraft()
  
}

let foodItem = document.getElementById('food')
food.addEventListener('click',foodHandel)

function foodHandel(e){
  parent.textContent = ""
  function renderfood() {
    for (let index = 0; index < productsImages.length; index++) {
      
      let random = getRandomIntInclusive(5, 50)
      let current = new Product(productsImages[index], random, index)
      console.log(current)
      if(current.category == 'food'){

        current.render(index)
      }
    }
  }
  renderfood()
  
}

let accessoriesItem = document.getElementById('accessories')
accessories.addEventListener('click',accessoriesHandel)

function accessoriesHandel(e){
  parent.textContent = ""
  function renderaccessories() {
    for (let index = 0; index < productsImages.length; index++) {
      
      let random = getRandomIntInclusive(5, 50)
      let current = new Product(productsImages[index], random, index)
      console.log(current)
      if(current.category == 'accessories'){

        current.render(index)
      }
    }
  }
  renderaccessories()
  
}

let potteryItem = document.getElementById('pottery')
pottery.addEventListener('click',potteryHandel)

function potteryHandel(e){
  parent.textContent = ""
  function renderpottery() {
    for (let index = 0; index < productsImages.length; index++) {
      
      let random = getRandomIntInclusive(5, 50)
      let current = new Product(productsImages[index], random, index)
      console.log(current)
      if(current.category == 'pottery'){

        current.render(index)
      }
    }
  }
  renderpottery()
  
}

// let cartNo = document.getElementById('cartNo')
// cartNo.textContent = `${chosenToCart.length} item`