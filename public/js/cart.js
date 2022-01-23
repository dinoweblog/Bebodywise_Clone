let cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(items) {
  let item = JSON.parse(items);

  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  cartCount.innerText = cart.length;
  displayCartItem(cart);
}

// cart buttom fun
let cartBtn = document.getElementById("cartBtn");
let backBtn = document.getElementById("backBtn2");
let backBtn2 = document.getElementById("backBtn");
let cartSlider = document.getElementById("cartSlider");
let cartSliderDiv = document.getElementById("cartSliderDiv");
let cartBackground = document.getElementById("cartBackground");
let id;

cartBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0 });

  setTimeout(() => {
    cartSlider.style.display = "block";
  }, 200);

  id = setTimeout(() => {
    cartSliderDiv.style.right = "0px";
  }, 300);

  setTimeout(() => {
    disableBodyScroll();
  }, 300);
});

backBtn.addEventListener("click", () => {
  cartSliderDiv.style.right = "-30%";
  setTimeout(() => {
    cartSlider.style.display = "none";
  }, 500);
  enableBodyScroll();
});

backBtn2.addEventListener("click", () => {
  cartSliderDiv.style.right = "-30%";
  setTimeout(() => {
    cartSlider.style.display = "none";
  }, 500);
  enableBodyScroll();
});

cartBackground.addEventListener("click", () => {
  cartSliderDiv.style.right = "-30%";
  setTimeout(() => {
    cartSlider.style.display = "none";
  }, 500);
  enableBodyScroll();
});

// calculation

let cartMid = document.getElementById("cartMid");
let cartItemList = document.getElementById("cartItemList");

let noOfItem = document.getElementById("noOfItem");
let totalItems = document.getElementById("totalItems");
let tAmount = document.getElementById("tAmount");
let sAmount = document.getElementById("sAmount");
let currAmount = document.getElementById("currAmount");
let disAmount = document.getElementById("disAmount");
let totalPay = document.getElementById("totalPay");
let saveAmount = document.getElementById("saveAmount");
let cartItem = document.getElementById("cartItem");
let cartItemMid = document.getElementById("cartItemMid");
let cartBottom = document.getElementById("cartBottom");

displayCartItem(cart);

function displayCartItem(cartItems) {
  cartItemList.innerHTML = "";

  noOfItem.innerText = "";

  tAmount.innerText = "";
  sAmount.innerText = "";
  currAmount.innerText = "";
  disAmount.innerText = "";
  totalPay.innerText = "";
  saveAmount.innerText = "";
  let amountAll = 0;
  let mrpAll = 0;
  let disAll = 0;
  if (cartItems.length != 0) {
    cartItemMid.style.display = "flex";
    cartItemMid.style.flexDirection = "column";
    cartItem.style.display = "none";
    cartCount.innerText = cartItems.length;
    noOfItem.innerText = cartItems.length;
    totalItems.innerText = `${cartItems.length} items`;
    for (var i = 0; i < cartItems.length; i++) {
      amountAll += cartItems[i].price;
      mrpAll += cartItems[i].mrp;
    }
  } else {
    cartItemMid.style.display = "none";
    cartItem.style.display = "flex";
  }

  currAmount.innerHTML = `<span class="material-icons" style="font-size:15px;">currency_rupee</span>${mrpAll}`;
  tAmount.innerHTML = `<span class="material-icons" style="font-size:15px;">currency_rupee</span>${amountAll}`;
  sAmount.innerHTML = `<span class="material-icons" style="font-size:15px;">currency_rupee</span>${
    mrpAll - amountAll
  }`;
  disAmount.innerHTML = `- <span class="material-icons" style="font-size:15px;">currency_rupee</span>${
    mrpAll - amountAll
  }`;

  totalPay.innerHTML = `<span class="material-icons" style="font-size:15px;">currency_rupee</span>${amountAll}`;
  saveAmount.innerHTML = `<span class="material-icons" style="font-size:15px;">currency_rupee</span>${
    mrpAll - amountAll
  }`;

  let uniqId = [];
  let uniqItem = [];
  cartItems.forEach((item) => {
    uniqId.push(item._id);
  });
  uniqId = [...new Set(uniqId)];

  for (var i = 0; i < uniqId.length; i++) {
    for (var j = 0; j < cartItems.length; j++) {
      if (cartItems[j]._id == uniqId[i]) {
        uniqItem.push(cartItems[j]);
        break;
      }
    }
  }

  uniqItem.forEach((item) => {
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "recoCard");
    let cardImg = document.createElement("div");
    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "textRecoDiv");
    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "priceRecoDiv");

    let buttonSection = document.createElement("div");
    buttonSection.setAttribute("id", "buttonSection");

    let totalA = document.getElementById("totalA");
    let checkoutBtn = document.getElementById("checkoutBtn");

    let qty = document.createElement("p");

    let img = document.createElement("img");
    let productName = document.createElement("p");
    productName.setAttribute("class", "recoProductName");
    let price = document.createElement("p");
    price.setAttribute("class", "recoPrice");
    let mrp = document.createElement("p");
    mrp.setAttribute("class", "recoMrp");

    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.innerText = "-";

    let addBtn = document.createElement("button");
    addBtn.setAttribute("id", "addBtn");
    addBtn.innerText = "+";
    qty.innerText = 1;

    qty.innerText = qtyCal(item);

    addBtn.addEventListener("click", () => {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      qty.innerText = qtyCal(item);
      window.location.reload();
    });

    qty.innerText = qtyCal(item);

    removeBtn.addEventListener("click", () => {
      removeItems(item._id);
      qty.innerText = qtyCal(item) - 1;
      window.location.reload();
    });

    totalA.innerText = "₹" + amountAll;

    buttonSection.append(removeBtn, qty, addBtn);

    img.src = item.imageUrl;
    productName.innerText = item.productName;
    price.innerHTML = `<span class="material-icons" style="font-size:16px;">currency_rupee</span>${item.price}`;
    mrp.innerText = item.mrp;

    cardImg.append(img);
    priceDiv.append(price, mrp);
    textDiv.append(productName, priceDiv, buttonSection);
    cardDiv.append(cardImg, textDiv);
    cartItemList.append(cardDiv);
  });
}

let arr = [];

function removeItems(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]._id === id) {
      console.log(cart[i]);
      id = 0;
    } else {
      arr.push(cart[i]);
    }
    localStorage.setItem("cart", JSON.stringify(arr));
  }
}

function qtyCal(item) {
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    if (item._id == cart[i]._id) {
      count++;
    }
  }

  return count;
}
//
//
//
//
//
//
//  Search
// displayRecomPro(cart);
let recProd = document.getElementById("recProd");

function displayRecomPro(Products) {
  Products.forEach((item) => {
    let reviwsP = Math.floor(Math.random() * 100 + 50);

    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "recoCard");
    let cardImg = document.createElement("div");
    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "textRecoDiv");
    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "priceRecoDiv");

    let rating = document.createElement("p");
    rating.setAttribute("class", "rating");
    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "ratingDiv");

    let review = document.createElement("p");
    review.innerText = `Based on ${reviwsP} reviews`;

    rating.innerHTML = `${item.rating} <i class="fa fa-star"></i> `;
    ratingDiv.append(rating, review);

    let img = document.createElement("img");
    let productName = document.createElement("p");
    productName.setAttribute("class", "recoProductName");
    let price = document.createElement("p");
    price.setAttribute("class", "recoPrice");
    let mrp = document.createElement("p");
    mrp.setAttribute("class", "recoMrp");

    let hairBtn = document.createElement("button");
    hairBtn.setAttribute("id", "addToCartBtn");
    hairBtn.innerText = "Add to Cart";

    img.src = item.imageUrl;
    productName.innerText = item.productName;
    price.innerHTML = "₹" + item.price;
    mrp.innerText = item.mrp;

    cardImg.append(img);
    priceDiv.append(price, mrp);
    textDiv.append(ratingDiv, productName, priceDiv, hairBtn);
    cardDiv.append(cardImg, textDiv);
    recProd.append(cardDiv);
    cardImg.addEventListener("click", () => {});
  });
}

// API ========================================

// async function getCart(tokenc) {
//   let api = `http://localhost:3000/cart`;

//   let response = await fetch(api, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   let cartData = await response.json();
//   console.log(cartData);
//   localStorage.setItem("cartData", JSON.stringify(cartData));
//   return cartData;
// }

// async function addToCart() {
//   let api = `http://localhost:3000/bebodywise/home`;

//   let response = await fetch(api, {
//     method: "POST",
//     body: cart,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   let cartData = await response.json();
//   console.log(cartData);
// }
