window.addEventListener("load", function () {
  var searchbtn = document.getElementById("searchbtn");
  searchbtn.addEventListener("click", search);
});

function search() {
  var searchvalue = document.getElementById("searchbar").value;
  var url = new URLSearchParams();
  url.append("name", searchvalue);
  location.assign("pokedetail.html?" + url);
}
