var nav = document.getElementById("side-nav")

function sidenav_open() {

    nav.style.left = "0";

}

function close_nav() {
    nav.style.left = "-60%";
}

function check(event) {
    var elements = "";
    var usertext = event.target.value.toUpperCase();
    console.log(usertext)
    var products = document.querySelector(".products")
    var product_box = products.querySelectorAll(".product-box")

    for (i = 0; i < product_box.length; i++) {
        var elements = product_box[i].querySelector("p").textContent.toUpperCase()

        if (elements.indexOf(usertext) < 0) {
            product_box[i].style.display = "none";
        } else {
            product_box[i].style.display = "flex";
        }
    }



}