

document.getElementById("address").addEventListener("click", upAndDown);

function upAndDown() {

  var content = this.nextElementSibling;
  if (content.style.display === "block") {

    content.style.display = "none";
    document.getElementById("address").innerHTML =
      "Shipping Details" + " " + "<span> &#8681;</span>";

  } else {

    content.style.display = "block";
    document.getElementById("address").innerHTML =
      "Shipping Details" + " " + "<span>&#8679;</span>";

  }
}

