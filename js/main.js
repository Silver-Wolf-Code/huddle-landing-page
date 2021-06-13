// function for valid email
function validation() {
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    text.innerHTML = "Email valid";
    text.style.color = "#40ff40";
  } else {
    text.innerHTML = "Check your email please";
    text.style.color = "#ff5060";
  }
}