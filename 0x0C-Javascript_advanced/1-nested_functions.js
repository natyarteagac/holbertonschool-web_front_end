#!/usr/bin/node
// Function outer calls the global variable and creates the variable course
// Function inner concatenate the global variable with course variable and create the variable exclamation
// Function inception concatenate globalvariable with course and exclamation

const globalVariable = 'Welcome';

function outer() {
  alert(globalVariable);
  let  course = ' Holberton ';
  function inner() {
    alert(globalVariable + course);
    let exclamation = '!';
    function inception() {
      alert(globalVariable + course + exclamation);
    }
    inception();
  }
  inner();
}
outer();
