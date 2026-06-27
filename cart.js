// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

// Display Cart
function displayCart(){

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartItems.innerHTML = `
        <h2 style="text-align:center;">
        Your Cart is Empty
        </h2>
        `;

        totalPrice.innerHTML = "₹0";
        return;
    }

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

        <img src="${item.image}">

        <div class="details">

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

        </div>

        <div class="quantity">

        <button onclick="decrease(${index})">-</button>

        <span>${item.quantity}</span>

        <button onclick="increase(${index})">+</button>

        </div>

        <button
        class="remove-btn"
        onclick="removeItem(${index})">

        Remove

        </button>

        </div>

        `;

    });

    totalPrice.innerHTML = "₹" + total.toLocaleString();

    localStorage.setItem("cart",JSON.stringify(cart));

}

// Increase Quantity
function increase(index){

    cart[index].quantity++;

    displayCart();

}

// Decrease Quantity
function decrease(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    displayCart();

}

// Remove Item
function removeItem(index){

    cart.splice(index,1);

    displayCart();

}

// Dark Mode
function toggleDarkMode(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

}

// Load Theme
if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark");

}

// Start
displayCart();