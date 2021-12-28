var data = [];
var xhr = new XMLHttpRequest();

function fetchData() {
  xhr.open("get", "../Data.json", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      // display Element in home page
      // console.log(data);
      for (var i = 0; i < 3; i++) {
        displayProduct(data[i]);
      }
    }
  };
}
fetchData();

function displayProduct(data) {
  var product;
  var productContainer = document.querySelector(".featured-center");
  if (data.offer) {
    // console.log("oll");
    console.log(data.offer, data.id);
    product = `<article class="product">
    <div class="product-container">
      <p id="saleTimer1" class="saleTimer"></p>
      <img src="./assets/sale.png" class="saleImg" alt="" />
      <img
        src="${data.image}"
        class="product-img img"
        alt=""
      />
      <div class="product-icons">
        <a href="single-product.html" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="1">
          <i class="fas fa-shopping-cart" onclick="AddToCart(${data.id},'${data.title}','${data.description}', '${data.image}', '${data.price}')"></i>
        </button>
        <button class="product-icon">
          <i class="far fa-heart"></i>
        </button>
      </div>
    </div>
    <footer>
      <h5 class="product-name">high-back bench</h5>
      <span id="priceBeforSale" class="product-price">${data.price}</span>
      <span class="product-sale"> ${ data.price - data.sale} </span>
    </footer>
  </article>`;
  } else {
    product = `<article class="product">
         <div class="product-container">
           <img
             src="${data.image}"
             class="product-img img"
             alt=""
           />
         
           <div class="product-icons">
             <a href="single-product.html" class="product-icon">
               <i class="fas fa-search"></i>
             </a>
             <button class="product-cart-btn product-icon" data-id="1">
               <i class="fas fa-shopping-cart" onclick="AddToCart(${data.id},'${data.title}','${data.description}', '${data.image}', '${data.price}')"></i>
             </button>
             <button class="product-icon">
               <i class="far fa-heart"></i>
             </button>
           </div>
         </div>
         <footer>
           <h5 class="product-name">${data.title}</h5>
           <span class="product-price">$ ${data.price}</span>
         </footer>
         </article>`;
  }
  productContainer.innerHTML += product;
}

function AddToCart(id, title, description, img, price) {
  if (localStorage.Cart) {
    var cart = JSON.parse(localStorage.Cart);

    if (cart[id]) cart[id].count++;
    else
      cart[id] = {
        id: id,
        title: title,
        description: description,
        img: img,
        price: price,
        count: 1,
      };

    localStorage.Cart = JSON.stringify(cart);
  } else {
    var cart = {};
    cart[id] = {
      id: id,
      title: title,
      description: description,
      img: img,
      price: price,
      count: 1,
    };
    localStorage.Cart = JSON.stringify(cart);
  }
}
if (location.search) {
  if (
    location.search.includes("fullName") &&
    location.search.includes("email")
  ) {
    var urlsearch = new URLSearchParams(location.search);
    var fullName = urlsearch.get("fullName");
    var email = urlsearch.get("email");
    var date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = `userName=${fullName};expires=${date}`;
    document.cookie = `email=${email};expires=${date}`;
  }
}
if (document.cookie) {
  var allCookie = document.cookie;
  var userNameRegex = /(userName)/i;
  var userNameCheck = userNameRegex.test(allCookie);
  // console.log(userNameCheck);
  if (userNameCheck) {
    showWelcomeFunction();
    document.getElementById("login").style.display = "none";
    document.getElementById("registration").style.display = "none";
  } else {
    document.getElementById("logout").style.display = "none";
  }
}
if (document.cookie) {
  if (getCookies("userName")) {
    // showWelcomeFunction();
    document.getElementById("login").style.display = "none";
    document.getElementById("registration").style.display = "none";
  }
} else {
  document.getElementById("logout").style.display = "none";
}



function logout() {
  var date = new Date();
  date.setDate(date.getDate() - 1);

  document.cookie = "userName=;expires=" + date.toUTCString();
  document.cookie = "email=;expires=" + date.toUTCString();
  location.replace("./Registration.html");
}






