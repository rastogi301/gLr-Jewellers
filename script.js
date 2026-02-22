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