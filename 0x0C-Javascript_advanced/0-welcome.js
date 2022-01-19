#!/usr/bin/node
// The function welcome concatenate two strings
// The function displayfullaname display in console the string Welcome + the name given in the function welcome

function welcome (firstName, lastName) {
  let fullName = firstName + ' ' + lastName;

  function displayFullName() {
      alert("Welcome " + fullName + "!");
  }
  displayFullName();
}
welcome('Holberton', 'School');
