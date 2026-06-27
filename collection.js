// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

updateCartCount();

// Add to Cart
function addToCart(name, price, image){

    let existing = cart.find(item => item.name === name);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            name:name,
            price:price,
            image:image,
            quantity:1

        });

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");
}

// Search Products
function searchProducts() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

}

// Dark Mode
function toggleDarkMode(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }

}

// Load Theme
window.onload=function(){

    if(localStorage.getItem("theme")=="dark"){
        document.body.classList.add("dark");
    }

    updateCartCount();

}