function buy() {
  alert("Thank you your order has been placed.");
}
function formvali() {
  var a = document.getElementById("email").value;
  var b = document.getElementById("pass").value;
  if (a == "" || b == "") {
    alert("Please fill all the required informtion!");
  }
}
