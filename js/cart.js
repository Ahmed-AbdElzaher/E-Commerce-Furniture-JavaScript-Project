function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");
  // Loop through the array elements
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      console.log(cookiePair);
      /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
      if(name == cookiePair[0].trim()) {
          // Decode the cookie value and return
          return decodeURIComponent(cookiePair[1]);
      }
  } 
  // Return null if not found
  return null;
}

var offValue = getCookie("offer");


function FillProducts() {
  if (localStorage.Cart) {
    var cart = JSON.parse(localStorage.Cart);
    var totalPrice = 0;
    
    var countOfItem = Object.keys(cart).length;
    document.getElementById("main-cart").innerHTML = `
    <h1>cart (<span class="totalCount">${countOfItem}</span> item)</h1>
    <div  id="shopping-cart" class="shopping-cart">
      <div class="column-labels">
        <label class="product-image">Image</label>
        <label class="product-details">Product</label>
        <label class="product-price">Price</label>
        <label class="product-quantity">Quantity</label>
        <label class="product-removal">Remove</label>
        <label class="product-line-price">Total</label>
      </div>`;
    for (item in cart) {
        var price = cart[item].count * cart[item].price;
      var product = `
            <div class="product">
            <div class="product-image">
              <img src="${cart[item].img}" />
            </div>
            <div class="product-details">
              <div class="product-title">${cart[item].title}</div>
              <p class="product-description">
              ${cart[item].description}
              </p>
            </div>
            <div class="product-price">${cart[item].price}</div>
            <div class="product-quantity">
              <input type="number" onchange="ValueChanged(this,'${item}', ${cart[item].price})"  value="${cart[item].count}" min="1" />
            </div>
            <div class="product-removal">
              <button onclick="removeProduct(this,'${item}')" class="remove-product">Remove</button>
            </div>
            <div id="total" class="product-line-price produc-pri">${cart[item].count * cart[item].price}</div>
          </div>`;
      document.getElementById("shopping-cart").innerHTML += product;
      price = parseInt(price);
      totalPrice += price;
    }
    // console.log(totalPrice);
    var netPrice = totalPrice +10 + 15 ;
    document.getElementById("shopping-cart").innerHTML += `<div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">${totalPrice}</div>
    </div>
    <div class="totals-item">
      <label>Tax</label>
      <div class="totals-value" id="cart-tax">10</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">15</div>
    </div>
    <div  class="totals-item totals-item-total">
      <label id="final-total">Grand Total</label>
      <div class="totals-value" id="cart-total"> ${netPrice} </div>
    </div>
    <div  class="totals-item totals-item-total">
      <label id="final-total">Total after offer </label>
      <div class="totals-value" id="cart-total"> ${netPrice - (offValue != null ? offValue: 0)} </div>
    </div>
  </div>
  <button class="checkout">Checkout</button>`;
  } else {
    document.getElementById(
      "main-cart"
    ).innerHTML = `<div class="empetyCart-box">
    <svg
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 231.523 231.523"
      xml:space="preserve"
      width="400"
    >
      <g>
        <path
          d="M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231
          l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z"
        />
        <path
          d="M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468
          c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468
          C147.235,148.377,150.23,152.062,154.351,152.488z"
        />
        <path
          d="M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221
          c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523
          c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215
          C104.494,212.835,100.808,216.523,96.278,216.523z"
        />
        <path
          d="M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221
          c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523
          c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215
          C181.937,212.835,178.251,216.523,173.719,216.523z"
        />
        <path
          d="M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876
          c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046
          c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z
          M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z"
        />
        <path
          d="M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607
          L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z"
        />
        <path
          d="M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606
          c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607
          C155.338,54.314,157.256,55.045,159.174,55.045z"
        />
        <path
          d="M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502
          c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z"
        />
      </g>
    </svg>
    <p class="empty-cart">Your cart is empty</p>
    <a href="./products.html">back to products </a>
  </div> `;
  }
}
FillProducts();

function removeProduct(val, productID) {
  var cart = JSON.parse(localStorage.Cart);
  // console.log(val, product);
  var sure = confirm("are you sure you want to delete ");
  if (sure) {
    var parent = val.parentElement.parentElement;
    document.getElementById("shopping-cart").removeChild(parent);
    delete cart[productID];
    
    // calac the net price
    var p = document.querySelectorAll(".produc-pri");
    var fullPrice = 0
    p.forEach(element => {
        fullPrice += parseInt(element.innerText);
    });
    var netPrice = fullPrice + 10 + 15;
        document.getElementById("cart-subtotal").innerText = fullPrice;
        document.getElementById("cart-total").innerText = netPrice;
    
  } else {
    // numeric.value = 1;
  }
  localStorage.Cart = JSON.stringify(cart);
  var cart = JSON.parse(localStorage.Cart);
  var lengthOfItem = Object.keys(cart).length;
  if (lengthOfItem > 0) {
    document.querySelector(".totalCount").innerHTML = lengthOfItem;
  } else {
    localStorage.removeItem("Cart");
    FillProducts();
  }
}

function ValueChanged(that,productID, pri) {
    var cart = JSON.parse(localStorage.Cart);
    cart[productID].count = parseInt(that.value);
    localStorage.Cart = JSON.stringify(cart);
    var price = parseInt(that.value) * pri;
    // document.getElementById("total").innerText = price;
    // console.log(price);
    var priceElement = that.parentElement.nextElementSibling.nextElementSibling;
    priceElement.innerText = price;
    var p = document.querySelectorAll(".produc-pri");
    var fullPrice = 0
    p.forEach(element => {
        fullPrice += parseInt(element.innerText);
    });
    var netPrice = fullPrice + 10 + 15;
        document.getElementById("cart-subtotal").innerText = fullPrice;
        document.getElementById("cart-total").innerText = netPrice;

}



// 
console.log();