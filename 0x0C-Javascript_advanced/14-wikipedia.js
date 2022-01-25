function createElement (data) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        console.log(JSON.parse(http.response));
        console.log('ESTOY PASANDO POR ACA')
      }
    }
    http.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exp", true);
    http.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    http.send();
};
queryWikipedia();
