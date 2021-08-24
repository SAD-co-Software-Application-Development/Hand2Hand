'use strict';
/* eslint-disable */

let total;
let totalOfTotals = 0;
let itemArray = [];

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

function loadDataToCart() {
  let tableBody = document.getElementById('tableBody');
  tableBody.textContent = ''
  totalOfTotals = 0
  if (itemArray != null) {
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
          totalOfTotals -= total / itemArray[i].ordered
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
        totalOfTotals += total / itemArray[i].ordered
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
  console.log(totalOfTotals, total)
  // window.location.reload();
}

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});

function saveToLocalStorage() {
  let data = JSON.stringify(itemArray)
  localStorage.setItem('products', data)
}


let cancel = document.getElementById('cancel');
cancel.addEventListener('click', cancelAllItems);

function cancelAllItems(event) {
  let clearTable = document.getElementById('tableBody');
  clearTable.textContent = "";
  localStorage.clear()
  itemArray = [];
  loadDataToCart();
  window.location.href = "store.html";
}






let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("buy");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  if (itemArray) {
    modal.style.display = "block";
    let maquininhaDiv = document.getElementById('maquininha')
    maquininhaDiv.textContent = ''

    for (let index = 0; index < itemArray.length; index++) {
      let divEl = document.createElement('div')
      divEl.className = 'flex-area j-space-between vai-sumir'
      maquininhaDiv.appendChild(divEl)
      let pEl = document.createElement('p')
      pEl.textContent = `${itemArray[index].ordered}  ${itemArray[index].name}`
      divEl.appendChild(pEl)
      let pEl1 = document.createElement('p')
      pEl1.textContent = `${itemArray[index].price.split(' ')[0] * itemArray[index].ordered}  $`
      divEl.appendChild(pEl1)

    }
    let totalDivEl = document.createElement('div')
    totalDivEl.id = 'total'
    totalDivEl.className = 'total flex-area j-space-between'
    maquininhaDiv.appendChild(totalDivEl)
    let pEl2 = document.createElement('p')
    pEl2.textContent = `Total`
    totalDivEl.appendChild(pEl2)
    let pEl3 = document.createElement('p')
    pEl3.textContent = `${totalOfTotals}  $`
    totalDivEl.appendChild(pEl3)


  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





let FancyCheckout = function (n) {
  let r = {};
  function a(e) {if (r[e]) return r[e].exports;let t = r[e] = { i: e, l: !1, exports: {} };return n[e].call(t.exports, t, t.exports, a), t.l = !0, t.exports} 
  return a.m = n, a.c = r, a.d = function (e, t, n) { a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }
  , a.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function (t, e) { if (1 & e && (t = a(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; let n = Object.create(null); if (a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (let r in t) a.d(n, r, function (e) { return t[e] }.bind(null, r)); return n }, a.n = function (e) { let t = e && e.__esModule ? function () { return e.default } : function () { return e }; return a.d(t, "a", t), t }, a.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, a.p = "/VisaCard/", a(a.s = 3)
}([function (e, t, n) { e.exports = function a(i, o, s) { function c(n, e) { if (!o[n]) { if (!i[n]) { if (d) return d(n, !0); let t = new Error("Cannot find module '" + n + "'"); throw t.code = "MODULE_NOT_FOUND", t } let r = o[n] = { exports: {} }; i[n][0].call(r.exports, function (e) { let t = i[n][1][e]; return c(t || e) }, r, r.exports, a, i, o, s) } return o[n].exports } for (let d = !1, e = 0; e < s.length; e++)c(s[e]); return c }({ 1: [function (e, t, n) { "use strict"; Object.defineProperty(n, "__esModule", { value: !0 }); let p = function (e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function (e, t) { let n = [], r = !0, a = !1, i = void 0; try { for (let o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, i = e } finally { try { !r && s.return && s.return() } finally { if (a) throw i } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") }; n.default = function (e) { let f = e.toString().replace(/\D/g, "").substr(0, 6), h = []; return i.default.forEach(function (l) { l.pattern.forEach(function (e) { let t, n, r, a, i, o, s, c, d, u; r = f, a = e, (Array.isArray(a) ? (i = r, o = p(a, 2), s = o[0], c = o[1], d = s.toString().length, u = parseInt(i.substr(0, d)), s <= u && u <= c) : (t = r, (n = a) instanceof RegExp ? n.test(t) : (n = n.toString(), t.substr(0, n.length) === n))) && h.unshift(l.name) }) }), h[0] || "" }; let r, a = e("./cards"), i = (r = a) && r.__esModule ? r : { default: r } }, { "./cards": 2 }], 2: [function (e, t, n) { "use strict"; Object.defineProperty(n, "__esModule", { value: !0 }), n.default = [{ name: "visa", pattern: [4] }, { name: "mastercard", pattern: [[51, 55], [2221, 2720]] }, { name: "amex", pattern: [34, 37] }, { name: "diners", pattern: [36, 309, [300, 305], [38, 39]] }, { name: "unionpay", pattern: [62] }, { name: "discover", pattern: [6011, [622126, 622925], [644, 649], 65] }, { name: "jcb", pattern: [35] }, { name: "maestro", pattern: [5018, 502, 503, 506, 56, 57, 58, 639, 6220, 67] }, { name: "elo", pattern: [401178, 401179, 431274, 438935, 451416, 457393, 457631, 457632, 504175, 627780, 636297, 636297, 636368, [506699, 506778], [509e3, 509999], [650031, 650033], [650035, 650051], [650405, 650439], [650485, 650538], [650541, 650598], [650700, 650718], [650720, 650727], [650901, 650920], [651652, 651679], [655e3, 655019], [655021, 655058], [650921, 650978]] }, { name: "hipercard", pattern: [384100, 384140, 384160, /^60(?!11)/] }] }, {}], 3: [function (e, t, n) { "use strict"; Object.defineProperty(n, "__esModule", { value: !0 }); let r = e("./cards"); Object.defineProperty(n, "cards", { enumerable: !0, get: function () { return i(r).default } }); let a = e("./cardType"); function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(n, "cardType", { enumerable: !0, get: function () { return i(a).default } }) }, { "./cardType": 1, "./cards": 2 }] }, {}, [3])(3) }, function (e, t, n) { }, , function (e, t, n) { "use strict"; function a(e, t) { for (let n = 0; n < t.length; n++) { let r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } n.r(t); let r = function () { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); let e = document.querySelector.bind(document); this.cardNumber = e("#numero-do-cartao-front"), this.cardNumberBack = e("#numero-do-cartao-back"), this.cardName = e("#nome-front"), this.cardNameBack = e("#nome-back"), this.cardDate = e("#data-front"), this.cardDateBack = e("#data-back"), this.cardBack = e("#cartao-back"), this.areaTitle = e("#titulo-area"), this.cardAreaTitle = e("#card-area-titulo"), this.areaButton = e("#button-area"), this.flipper = e("#flipper"), this.littleMachine = e("#maquininha"), this.niceEdge = e("#bordinha-nice"), this.successFeedback = e("#feedback-sucesso"), this.total = e("#total"), this.willDisappearAll = document.querySelectorAll(".vai-sumir"), this.willDisappear = e(".vai-sumir"), this.scrolTop = this.scrolTop.bind(this), this.secondStep = this.secondStep.bind(this), this.submit = this.submit.bind(this) } let e, n, r; return e = t, (n = [{ key: "scrolTop", value: function () { window.scroll({ top: 0, left: 0, behavior: "smooth" }) } }, { key: "secondStep", 
value: function () {
   let e = this;
    this.littleMachine.addEventListener("transitionend", function () { e.littleMachine.style.cssText = "\n        height:auto;\n        z-index: 999;\n        padding: 50px 35px 90px 35px;\n        width: 80%;\n        margin:0px auto;\n        background: #5E8B7E;\n        background: -moz-linear-gradient(360deg, #5E8B7E 0%, #2F5D62 100%);\n        background: -webkit-linear-gradient(360deg, #5E8B7E 0%,#2F5D62 100%);\n        background: linear-gradient(360deg, #5E8B7E 0%,#2F5D62 100%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5E8B7E', endColorstr='#2F5D62',GradientType=1 );\n        border-bottom: 6px solid #20163d;\n        box-shadow: 0px 4px 8px #2F5D62;\n      ", e.niceEdge.style.opacity = "1" })
//     , 
// this.flipper.addEventListener("animationend", function () {
//    e.successFeedback.style.cssText = "opacity:1; transform: translate(-50%, -100%);" })
   } }, 
   { key: "submit", value: function () { let e = this; this.littleMachine.style.height = "".concat(this.littleMachine.offsetHeight, "px"), this.scrolTop(), this.cardNumberBack.insertAdjacentHTML("afterbegin", this.cardNumber.value), this.cardNameBack.insertAdjacentHTML("afterbegin", this.cardName.value.toUpperCase()), this.cardDateBack.insertAdjacentHTML("afterbegin", this.cardDate.value), this.cardAreaTitle.classList.add("fadeOut"), this.areaTitle.classList.add("fadeOut"), this.areaButton.classList.add("fadeOut"), this.flipper.classList.add("anima-flipper"), this.cardBack.classList.add("anima-cartao-back"), this.littleMachine.classList.add("animacao-maquininha"), this.cardBack.addEventListener("animationend", function () { e.willDisappearAll.forEach(function (e) { e.style.animation = "vaiSumir 300ms both" }), e.willDisappear.addEventListener("animationend", function () { e.willDisappearAll.forEach(function (e) { return e.remove() }), e.total.style.cssText = "padding:15px; border:2px solid rgba(255,255,255,0.7); border-radius:4px;", e.littleMachine.style.height = "100px", e.secondStep() }, !1) }, !1) } }]) && a(e.prototype, n), r && a(e, r), t }(), i = { init: function (e, t) { let n = e, r = t; window.setTimeout(function () { n.value = r(n.value) }, 1) }, creditCardPattern: function (e) { let t = e; return t = (t = (t = (t = t.replace(/\D/g, "")).replace(/^(\d{4})(\d)/g, "$1 $2")).replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3")).replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4") }, datePattern: function (e) { let t = e; return t = t.replace(/^(\d{2})(\d{4})/g, "$1/$2") } }, o = function () { let e = document.getElementById("numero-do-cartao-front"), t = document.getElementById("data-front"); e.addEventListener("keypress", function (e) { i.init(this, i.creditCardPattern) }), t.addEventListener("keypress", function (e) { i.init(this, i.datePattern) }) }, s = { onlyRegex: function (e, t) { let n = e.keyCode || e.which; n = String.fromCharCode(n), t.test(n) || (e.returnValue = !1, e.preventDefault && e.preventDefault()) } }, c = function () { let e = document.getElementById("numero-do-cartao-front"), t = document.getElementById("nome-front"), n = document.getElementById("data-front"), r = document.getElementById("cvv-front"); e.addEventListener("paste", function (e) { return e.preventDefault() }), e.addEventListener("copy", function (e) { return e.preventDefault() }), e.addEventListener("cut", function (e) { return e.preventDefault() }), e.addEventListener("keypress", function (e) { return s.onlyRegex(e, /\d/) }), t.addEventListener("keypress", function (e) { return s.onlyRegex(e, /[A-z\s]/) }), n.addEventListener("keypress", function (e) { return s.onlyRegex(e, /[\d]/) }), n.addEventListener("keypress", function (e) { return s.onlyRegex(e, /[\d]/) }), r.addEventListener("keypress", function (e) { return s.onlyRegex(e, /[\d]/) }) }, d = n(0); function u(e, t) { for (let n = 0; n < t.length; n++) { let r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } let l = function () { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); let e = document.querySelector.bind(document); this.cardFlag = e("#marca-cartao"), this.cardNumber = e("#numero-do-cartao-front"), this.init = this.init.bind(this), this.add = this.add.bind(this), this.remove = this.remove.bind(this), this.countChars = this.countChars.bind(this) } let e, n, r; return e = t, (n = [{ key: "init", value: function (e) { let t = e.target.value; t.length <= 3 ? this.remove() : Object(d.cardType)(t) && this.add(t) } }, { key: "add", value: function (e) { let t = this, n = Object(d.cardType)(e), r = this.countChars(n); this.cardFlag.setAttribute("alt", "Visa " + n), this.cardFlag.setAttribute("src", "Images/VisaCard/" + n + ".png"), this.cardNumber.setAttribute("minlength", r.minlength + 3), this.cardNumber.setAttribute("maxlength", r.maxlength + 3), window.setTimeout(function () { t.cardFlag.classList.add("marca-cartao-entra") }, 100) } }, { key: "remove", value: function () { let e = this; this.cardFlag.classList.remove("marca-cartao-entra"), window.setTimeout(function () { e.cardFlag.setAttribute("src", "Images/VisaCard/visa.png"), e.cardFlag.setAttribute("alt", ""), e.cardNumber.removeAttribute("minlength"), e.cardNumber.setAttribute("maxlength", 22) }, 100) } }, { key: "countChars", value: function (e) { let t, n; switch (e) { case "amex": n = t = 15; break; case "diners": t = 14, n = 16; break; case "discover": case "elo": n = t = 16; break; case "hipercard": t = 13, n = 19; break; case "jcb": case "mastercard": n = t = 16; break; case "visa": t = 13, n = 16 }return { minlength: t, maxlength: n } } }]) && u(e.prototype, n), r && u(e, r), t }(), f = function () { let e = new l; document.getElementById("numero-do-cartao-front").addEventListener("keyup", e.init) }; o(), c(), f(); n(1); function h() { (new r).submit() } n.d(t, "init", function () { return h }) }]);








   //Function to show the buttons
function showButtons() {
  let buttons = document.getElementById("BTND");
  // Restore normal display mode
  buttons.style.visibility = "visible";
}
 
// Start the script after the page is loaded
// SoSciTools.attachEvent(window, "load",
//   function() {
  let btncomprar = document.getElementById('btn-comprar')
  btncomprar.addEventListener('click', riveal);
  function riveal() {
    let buttons = document.getElementById("BTND");
    buttons.addEventListener('click', doneHandle)
    // Hide the buttons (with placeholder)
    buttons.style.visibility = "hidden";
    // Start the timer
    window.setTimeout(showButtons, 5200); // after 1 Min = 60.000 ms
  }

  function doneHandle(event) {
    event.preventDefault()

    modal.style.display = "none";

    let clearTable = document.getElementById('tableBody');

    clearTable.textContent = "";

    localStorage.clear()

    itemArray = [];

    loadDataToCart();

    window.location.href = "store.html";

    
  }
