function formValidation() {
  var password = document.registration.password;
  var uname = document.registration.username;

  var uemail = document.registration.email;
  if (password_validation(password, 7, 12)) {
    {
      if (allLetter(uname)) {
        if (ValidateEmail(uemail)) {
        }
      }
    }
  }
  return false;
}
function password_validation(password, mx, my) {
  var password_len = password.value.length;
  if (password_len == 0 || password_len >= my || password_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    password.focus();
    return false;
  }
  return true;
}
function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  }
}
function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}
