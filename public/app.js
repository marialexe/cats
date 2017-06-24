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

var createLiImage = function(src) {
  var li = document.createElement('li');
  var img = document.createElement('img');
  li.appendChild(img);
  img.src = src;
  img.width = 500;
  img.height = 300;
  return li;
}

var appendElements = function(list, ul, li, li1, li2) {
  ul.appendChild(li);
  ul.appendChild(li1);
  ul.appendChild(li2);
  list.appendChild(ul);
}

var addNewCat = function(name, food, src) {
  var ul = createUlElement();
  var li = createLiName(name);
  var li1 = createLiFavFood(food);
  var li2 = createLiImage(src);
  var section = document.getElementById("cats");
  appendElements(section, ul, li, li1, li2);
}

var app = function() {
  addNewCat("Roxy", "Milk", "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg");
  addNewCat("Lady", "Sour cream", "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg")

  
  


}
  

window.onload = app;