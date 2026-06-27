function toggleMenu(){
    const menu = document.getElementById("navLinks");
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

function buyItem(item){
    document.getElementById("popupText").innerText =
    "Thank you for choosing " + item + " from gLr Jewellers!";
    document.getElementById("popup").style.display="block";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}
// Search Products on Homepage
function searchHomeProducts() {

    let input = document.getElementById("homeSearch").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

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

// Load Saved Theme
window.onload = function(){

    if(localStorage.getItem("theme")=="dark"){
        document.body.classList.add("dark");
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = document.getElementById("cartCount");

    if(count){
        count.innerHTML = cart.length;
    }

}