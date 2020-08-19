'use strict';

// assignment:render three images in random sequence
// acquire parent element 'inventory' and create the global elements
var parentElement = document.getElementById('inventory');
var parentList = document.getElementById('item-list');
var itemArray = [];
var repeatArray = [];
var totalClicks = 0;
var clickLimit = 25;
// var productsArray = [];
var productName = [];

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

// for (var i = 0; i < itemArray.length; i++){
//   productName.push(productsArray[i].title);
// }

function getRandomImage() {
  var randomIndex = getRandomNumber(itemArray.length);
  while(repeatArray.includes(randomIndex)){
    randomIndex = getRandomNumber(itemArray.length);
  }
  repeatArray.push(randomIndex);
  if(repeatArray.length > 6){
    repeatArray.shift();
  }
  var chosenImage = itemArray[randomIndex];
  chosenImage.itemCounter++;

  buildElements(chosenImage);
}

function buildElements(chosenImage){

  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.itemPhoto);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);


  var radioButton = document.createElement('input');
  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('value', chosenImage.alt);

  parentElement.appendChild(radioButton);
  parentElement.appendChild(imageElement);
}

// get helper function
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function clickImage(event){
  totalClicks++;
  var alt = event.target.value;
  for (var i=0; i<itemArray.length; i++) {
    if(alt === itemArray[i].alt) {
      itemArray[i].clickCounter++;
      itemArray[i].itemCounter++;
    }
    parentElement.innerHTML = '';
    getRandomImage();
    getRandomImage();
    getRandomImage();
  }
  if (totalClicks>=clickLimit){
    parentElement.removeEventListener('click', clickImage);
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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: productName,
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});