window.addEventListener("load", function () {
  var url = new URLSearchParams(window.location.search);
  pokeballopen(url.get("name"));
  var home = document.getElementById("home");
  home.addEventListener("click", gohome);
});
function pokeballopen(name) {
  if (name) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase());
    xhr.send();
    xhr.onload = function () {
      var pokedetail = JSON.parse(xhr.response);
      var pokeid = JSON.parse(xhr.response).id;
      catchimg(pokeid);
      detail(pokedetail);
    };
  }
}
function catchimg(id) {
  if (id) {
    var pokeimg = document.createElement("img");
    pokeimg.setAttribute(
      "src",
      "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png"
    );
    pokeimg.setAttribute("id", "pokemon");
    var pokeball = document.getElementById("pokeballdiv");
    pokeball.append(pokeimg);
  }
}
function detail(pokedetail) {
  var dex = document.getElementById("dex");
  var name = document.createElement("p");
  name.textContent = "Name: " + pokedetail.name;
  var height = document.createElement("p");
  height.textContent = "Height: " + pokedetail.height;
  var weight = document.createElement("p");
  weight.textContent = "Weight: " + pokedetail.weight;
  var type = document.createElement("p");
  type.textContent = "Type: " + pokedetail.types[0].type.name;
  dex.append(name, height, weight, type);
}
function gohome() {
  location.assign("index.html");
}
