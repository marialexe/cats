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

var createLiFavFood = function(food) {
  var li = document.createElement('li');
  li.innerText = "Favourite food: " + food;
  return li;
}

var appendElements = function(list, ul, li, li1) {
  ul.appendChild(li);
  ul.appendChild(li1);
  list.appendChild(ul);
}

var addNewCat = function(name, food) {
  var ul = createUlElement();
  var li = createLiName(name);
  var li1 = createLiFavFood(food);
  var section = document.getElementById("cats");
  appendElements(section, ul, li, li1);
}

var app = function() {
  addNewCat("Roxy", "Milk");
}

window.onload = app;