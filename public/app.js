var createUlElement = function() {
  var ul = document.createElement('ul');
  ul.classList.add("cat");
  return ul;
}

var createLiName = function(name) {
  var li = document.createElement('li');
  li.innerText = "Name: " + name;
  return li;
}

var appendElements = function(list, ul, li) {
  ul.appendChild(li);
  list.appendChild(ul);
}

var addNewCat = function(name) {
  var ul = createUlElement();
  var li = createLiName(name);
  var section = document.getElementById("cats");
  appendElements(section, ul, li);
}

var app = function() {
  addNewCat("Roxy");
}

window.onload = app;