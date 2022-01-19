function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

main () {
  let spooky = (9, 'bold', 'uppercase', 'pink', 'green');
  let dark = (12, 'bold', 'capitalize','black', 'white');
  let scream = (12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  const spookyButton = document.createElement("button").className = "spooky-button";
  spookyButton.innerHTML = "Spooky";
  document.body.appendChild('.spooky-button');

  const darkMode = document.createElement("button");
  darkMode.innerHTML = "Dark Mode";
  document.body.appendChild(darkMode);

  const screamMode = document.createElement("button");
  screamMode.innerHTML = "Scream mode";
  document.body.appendChild(screamMode);
};
main();
