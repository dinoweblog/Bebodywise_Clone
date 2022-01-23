
  document
    .getElementById("next_pincode_submit")
    .addEventListener("click", checkAddress);
  
  function checkAddress() {
  console.log("ashok");
    var number = document.getElementById("next_pincode").value;
  
    if (number.length === 6) {
      document.getElementById("next_pincode_available").style.display = "block";
      var content1 = "your address is available";
      document.getElementById("next_pincode_available").textContent = content1;
      document.getElementById("next_pincode_available").style.color = "green";
    
    }
  
    if (number.length > 6 || number.length < 6) {
      document.getElementById("next_pincode_available").style.display = "block";
      var content = "Your Address not availble - check your pincode";
      document.getElementById("next_pincode_available").textContent = content;
      document.getElementById("next_pincode_available").style.color = "red";
    }
  }


  document.getElementById("next_expand_head1").addEventListener("click", upAndDown);

document.getElementById("next_expand_head2").addEventListener("click",upAndDown);

document.getElementById("next_expand_head3").addEventListener("click",upAndDown);

document.getElementById("next_expand_head4").addEventListener("click",upAndDown);


// the below function is to dispaly content for up and down 
function upAndDown() {
  var content = this.nextElementSibling;
  console.log(content);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
  

