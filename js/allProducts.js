var data = [];
var xhr = new XMLHttpRequest();
var key = "all";

function fetchData() {
  xhr.open("get", "../Data.json", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
    }
    if (key == "all") {
      data.forEach((element) => {
        displayProduct(element);
      });
    }

  };
}
fetchData();

function filtrationBtn(keybtn) {
  document.querySelector(".products-container").innerHTML = "";
  key = keybtn;
  var sec = [];
  xhr.open("get", "../Data.json", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      if (key != "all") {
        data.forEach((element) => {
          if (element.category == key) {
            sec.push(element);
          }
        });
        sec.forEach((element) => {
          displayProduct(element);
        });
        return;
      }
      data.forEach((element) => {
        displayProduct(element);
      });
    }
  };
}


function displayProduct(data) {
  var productContainer = document.querySelector(".products-container");
  var product = `<article class="product">
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
  productContainer.innerHTML += product;
}

// search nav
function searchNav(value) {
  var v = value.trim();
  // console.log(v);
  var sercRes = [];
  xhr.open("get", "../Data.json", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.querySelector(".products-container").innerHTML = "";
      var dataS = JSON.parse(xhr.responseText);
      var res = dataS.filter((car) => {
        return car.title.includes(value);
      });
      res.forEach((element) => {
        displayProduct(element);
      });
    }
  };
}

// Price Range
var priceReange = document.getElementById("price-range");
var priceValue = document.querySelector(".price-value");

// display the price of choies
priceReange.oninput = function () {
  priceValue.textContent = `Value : $${this.value}`;
  var valueOfInput = this.value;
  var sercRes = [];
  xhr.open("get", "../Data.json", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var dataS = JSON.parse(xhr.responseText);
      dataS.sort((a, b) => {
        if (a.price > b.price) return 1;
        else if (a.price < b.price) return -1;
        else return 0;
      });
      console.log(dataS);
      document.querySelector(".products-container").innerHTML = "";
      dataS.forEach((element) => {
        if (element.price <= valueOfInput) {
          sercRes.push(element);
        }
      });
      console.log(sercRes);
      sercRes.forEach((element) => {
        displayProduct(element);
      });
    }
  };
};

// Add to chart 
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