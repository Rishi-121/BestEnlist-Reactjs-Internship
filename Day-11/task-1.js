// jshint esversion:6

function getFormvalue() {
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();

  if (firstName === "" || lastName === "") {
    return false;
  } else {
    document.write(firstName + " " + lastName);
  }
}
