var Card = function(args={}) {
  this.color = args["color"],
  this.shade = args["shade"],
  this.number = args["number"],
  this.shape = args["shape"]
}

var Deck = []

colors = ["blue", "red", "yellow"];
numbers = ["1","2","3"];
shades = ["solid", "striped", "blank"];
shapes = ["circle", "square", "triangle"];

colors.forEach(function(color){
  numbers.forEach(function(number){
    shades.forEach(function(shade){
      shapes.forEach(function(shape){
        Deck.push(new Card({"shape" : shape, "shade": shade, "number": number, "color" : color}));
      })
    })
  })
})

Board = []

Array.prototype.randomCards = function(number) {
  for(var i = 0; i < number; i++) {
    var card = this[Math.floor(Math.random() * this.length)]
    var index = Deck.indexOf(card)
    Board.push(card)
    Deck.splice(index, 1);
    }
  }

Array.prototype.removeSet = function(array) {
  array.forEach(function(card){
    var index = Board.indexOf(card)
    Board.splice(index, 1);
  })
}

buildBoard();
var testArray = [Board[0], Board[1], Board[2]]

validSet(testArray);
console.log("Board")
console.log(Deck.length);
console.log(Board.length);
console.log("")

function sameColor(array) {
  colorArray = array.map(function(card){
    return card.color
  })
  return colorArray.every(function(color){
    return color === "blue" || color === "red" || color === "yellow"
  })
};

function uniqueColor(array) {
  arrayColors = array.map(function(card){
    return card.color
  }).sort()
  return arrayColors.toString() === colors.toString();
}

function checkColor(array) {
  if (sameColor(array) || uniqueColor(array)){
    return true
  } else {
    return false
  }
}

function sameShape(array) {
  shapeArray = array.map(function(card){
    return card.shape
  })
  return shapeArray.every(function(shape){
    return shape === "circle" || shape === "square" || shape === "triangle"
  })
};

function uniqueShape(array) {
  arrayShapes = array.map(function(card){
    return card.shape
  }).sort()
  return arrayShapes.toString() === shapes.toString();
}

function checkShape(array) {
  if (sameShape(array) || uniqueShape(array)){
    return true
  } else {
    return false
  }
}

function sameNumber(array) {
  numberArray = array.map(function(card){
      return card.number
    })
  return numberArray.every(function(number){
    return number === "1" || number === "2" || number === "3"
  })
};

function uniqueNumber(array) {
  arrayNumbers = array.map(function(card){
    return card.number
  }).sort()
  return arrayNumbers.toString() === numbers.toString();
}

function checkNumber(array) {
  if (sameNumber(array) || uniqueNumber(array)){
    return true
  } else {
    return false
  }
}

function sameShade(array) {
  shadeArray = array.map(function(card){
    return card.shade
  })
  return shadeArray.every(function(shade){
     return shade === "blank" || shade === "solid" || shade === "striped"
  })
};

function uniqueShade(array) {
  arrayShades = array.map(function(card){
    return card.shade
  }).sort()
  return arrayShades.toString() === shades.toString();
}

function checkShade(array) {
  if (sameShade(array) || uniqueShade(array)){
    return true
  } else {
    return false
  }
}

function buildBoard() {
  return Deck.randomCards(9);
}

function addNewSet() {
  Deck.randomCards(3);
}

function validSet(setArray) {
  Board.removeSet(setArray);
  addNewSet();
}

function compareSet(setArray) {
  if ( checkColor(setArray) && checkShape(setArray) && checkShade(setArray) && checkNumber(setArray) ) {
    return true
  } else {
    return false
  }
}

card1 = {"color" : "blue", "shade" : "solid", "shape" : "circle", "number" : "1"};
card2 = {"color" : "blue", "shade" : "solid", "shape" : "triangle", "number" : "1"};
card3 = {"color" : "blue", "shade" : "solid", "shape" : "square", "number" : "1"};

console.log(card1.number);
console.log(card2.number);
console.log(card3.number);
var testArray = [card1, card2, card3];
console.log(testArray);

console.log("");
console.log(sameColor(testArray));
console.log("Unique Shade should return false");
console.log(uniqueShade(testArray));
console.log(sameShade(testArray));
console.log("");
console.log(sameShade(testArray));
console.log(sameNumber(testArray));
console.log(sameShape(testArray));
console.log("");
console.log(compareSet(testArray));


// function colorCheck(testArray) {
//   testArray.every(function(card){
//     if (card.color === testArray[0].color) {
//       return true
//     } else if ( (card.color != card[0].color) && (card.color != card[1].color) ){
//     } else {
//       return false
//     }
//   })
// };
//
// function checkSet(testArray) {
//   testArray.keys
// }
