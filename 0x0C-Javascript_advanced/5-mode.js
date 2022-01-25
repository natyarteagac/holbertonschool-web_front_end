function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main () {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let dark = changeMode(12, 'bold', 'capitalize','black', 'white');
  let scream = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  const spookyButton = document.createElement("button");
  spookyButton.innerHTML = "Spooky";
  spookyButton.onclick = function () { spooky() };
  document.body.appendChild(spookyButton);

  const darkMode = document.createElement("button");
  darkMode.innerHTML = "Dark Mode";
  darkMode.onclick = function () { dark () };
  document.body.appendChild(darkMode);

  const screamMode = document.createElement("button");
  screamMode.innerHTML = "Scream mode";
  screamMode.onclick = function () { scream() };
  document.body.appendChild(screamMode);
}

main();
