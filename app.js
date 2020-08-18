'use strict';

// assignment:render three images in random sequence
// acquire parent element 'inventory' and create the global elements
var parentElement = document.getElementById('inventory');
var parentList = document.getElementById('item-list');
var itemArray = [];
var clickLimit = 25;

function Items(itemPhoto, alt) {
  this.itemPhoto = itemPhoto;
  this.alt = alt;
  this.title = alt;
  this.clickCounter = 0;
  this.itemCounter = 0;

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

function getRandomImage() {
  var randomIndex = getRandomNumber(itemArray.length);
  var chosenImage = itemArray[randomIndex];
  chosenImage.itemCounter++;
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.itemPhoto);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);

  parentElement.appendChild(imageElement);
}

// get helper function
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function clickImage(event){
  var alt = event.target.alt;
  clickLimit--;
  if (clickLimit !== 0) {
    for (var i=0; i<itemArray.length; i++) {
      if(alt === itemArray[i].alt) {
        itemArray[i].clickCounter++;
      }
    }
    parentElement.innerHTML = '';
    getRandomImage();
    getRandomImage();
    getRandomImage();
  }
  else {
    parentElement.innerHTML = '';
    for (var j=0; j<itemArray.length; j++) {
      var listResults = document.createElement('li');
      listResults.textContent = itemArray[j].alt + ' had ' + itemArray[j].clickCounter + ' votes and was shown ' + itemArray[j].itemCounter + ' times.';
      parentList.appendChild(listResults);
    }
  }
}


parentElement.addEventListener('click', clickImage);

getRandomImage();
getRandomImage();
getRandomImage();
