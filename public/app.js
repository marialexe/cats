var createUlElement = function() {
  var ul = document.createElement('ul');
  ul.classList.add("cat");
  return ul;
}

var appendElements = function(list, ul) {
  list.appendChild(ul);
}

var addNewCat = function() {
  var ul = createUlElement();
  var section = document.getElementById("cats");
  appendElements(section, ul);
}

var app = function() {
  addNewCat();
}

window.onload = app;