'use strict';

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});

let storeContainer = document.getElementById('storeContainer');
let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');
let bt4 = document.getElementById('bt4');
let bt5 = document.getElementById('bt5');
let bt6 = document.getElementById('bt6');
let bt7 = document.getElementById('bt7');
let bt8 = document.getElementById('bt8');
let bt9 = document.getElementById('bt9');
let bt10 = document.getElementById('bt10');
let bt11 = document.getElementById('bt11');
let bt12 = document.getElementById('bt12');
let knitting = document.getElementById('knitting');
let subBanner1 = document.getElementsByClassName('subBanner1')

let itemArray = [];

function Items(itemURL,itemPrice){
  this.itemURL = itemURL;
  this.itemPrice = itemPrice;
  itemArray.push(this);

}

bt1.addEventListener('click',bt1F);
function bt1F(){
  new Items('https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/67101/1.jpg?7288','10 $');
  saveLocal();
  console.log(itemArray)
}

bt2.addEventListener('click',bt2F);
function bt2F(){
  new Items('https://i2.wp.com/www.tareqah.com/wp-content/uploads/2017/09/Fashion-jewelry-handmade-accessories-feather-red-string-knitted-bracelet.jpg?ssl=1','20 $');
  saveLocal();
}

bt3.addEventListener('click',bt3F);
function bt3F(){
  new Items('https://www.arageek.com/wp-content/uploads/ibda3world/2010/04/3-1-1.jpg','30 $');
  saveLocal();
}

bt4.addEventListener('click',bt4F);
function bt4F(){
  new Items('https://i.ytimg.com/vi/0jyq1213OoI/maxresdefault.jpg','15 $');
  saveLocal();
}

bt5.addEventListener('click',bt5F);
function bt5F(){
  new Items('https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2020/12/10/ak_k1_1012.jpg?itok=BbNzgrxC&timestamp=1607585693','25 $');
}

bt6.addEventListener('click',bt6F);
function bt6F(){
  new Items('https://assets.ajio.com/medias/sys_master/root/20210514/T01n/609e7c45f997ddb3129e999c/-473Wx593H-461571257-blue-MODEL.jpg','30 $');
  saveLocal();
}

bt7.addEventListener('click',bt7F);
function bt7F(){
  new Items('https://rukminim1.flixcart.com/image/714/857/k7m8brk0/t-shirt/d/t/q/4xl-rc90tshirtwhite-roden-original-imafptpa8zgpjrrx.jpeg?q=50','10 $');
  saveLocal();
}

bt8.addEventListener('click',bt8F);
function bt8F(){
  new Items('asdad','5 $');
  saveLocal();
}

bt9.addEventListener('click',bt9F);
function bt9F(){
  new Items('asdad','8 $');
  saveLocal();
}

bt10.addEventListener('click',bt10F);
function bt10F(){
  new Items('asdad','15 $');
  saveLocal();
}

bt11.addEventListener('click',bt11F);
function bt11F(){
  new Items('asdad','20 $');
  saveLocal();
}

bt12.addEventListener('click',bt12F);
function bt12F(){
  new Items('asdad','12 $');
  saveLocal();
}

function saveLocal(){
  let data = JSON.stringify(itemArray);
  localStorage.setItem('items',data);
}


knitting.addEventListener('click',filter)

function filter(){

}