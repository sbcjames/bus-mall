'use strict';

// assignment:render three images in random sequence
// acquire parent element 'inventory' and create the global elements
var parentElement = document.getElementById('inventory');
var itemArray = [];

function Items(itemPhoto, alt){
  this.itemPhoto = itemPhoto;
  this.alt = alt;
  this.title = alt;
  
  itemArray.push(this);
}

new Items('img/bag.jpg', 'bag');
new Items('img/banana.jpg', 'banana');
new Items('img/bathroom.jpg', 'bathroom');
new Items('img/boots.jpg', 'boots');
new Items('img/breakfast.jpg', 'breakfast');
new Items('img/bubblegum.jpg', 'bubblegum');
new Items('img/chair.jpg', 'chair');
new Items('img/cthulhu.jpg', 'cthulhu');
new Items('img/dog-duck.jpg', 'dog-duck');
new Items('img/dragon.jpg', 'dragon');
new Items('img/pen.jpg', 'pen');
new Items('img/pet-sweep.jpg', 'pet-sweep');
new Items('img/scissors.jpg', 'scissors');
new Items('img/shark.jpg', 'shark');
new Items('img/sweep.png', 'sweep');
new Items('img/tauntaun.jpg', 'tauntaun');
new Items('img/unicorn.jpg', 'unicorn');
new Items('img/usb.gif', 'usb');
new Items('img/water-can.jpg', 'water-can');
new Items('img/wine-glass.jpg', 'wine-glass');

// get helper function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));

