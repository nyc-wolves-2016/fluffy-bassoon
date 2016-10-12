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

Array.prototype.removeSet = function() {
  this.forEach(function(card){
    var index = Board.indexOf(card)
    Board.splice(index, 1);
  })
}


var testArray = [Board[0], Board[1], Board[2]]

function sameColor(array) {
  return array.every(function(card){
    return card.color === array[0].color
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
  return array.every(function(card){
    return card.shape === array[0].shape
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
  return array.every(function(card){
    return card.number === array[0].number
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
  return array.every(function(card){
     return card.shade === array[0].shade
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

function addNewCards() {
  Deck.randomCards(3);
}

function validSet(setArray) {
  Board.removeSet(setArray);
  addNewCards();
}

function compareSet(setArray) {
  if ( checkColor(setArray) && checkShape(setArray) && checkShade(setArray) && checkNumber(setArray) ) {
    return true
  } else {
    return false
  }
}

function checkBoard(board){
  board.find(function(card){
    return compareSet(card)
  });

}
function validSetsOnBoard() {
  event.preventDefault();
  var data2 = {data: Board};
  var xhr = $.ajax({
    url: '/boards',
    method: 'POST',
    data:  data2
  })
  validSet = xhr.done(function(response){
    newBoard = response.response
    if (checkBoard(newBoard) != undefined) {
      return true
    } else {
      return false
    }
  })
  return validSet
}

// Array.prototype.conainsValidSet = function() {
//   this.forEach(function(card){
//     numberCompare = this.map(function(mapCard){
//       if (card.number === mapCard.number) {
//         return mapCard
//       }
//     }.bind(this));
//     colorCompare = this.map(function(mapCard){
//       if (card.color === mapCard.color) {
//         return mapCard
//       }
//     }.bind(this));
//     shapeCompare = this.map(function(mapCard){
//       if (card.shape === mapCard.shape) {
//         return mapCard
//       }
//     }.bind(this));
//     shadeCompare = this.map(function(mapCard){
//       if (card.shade === mapCard.shade) {
//         return mapCard
//       }
//     }.bind(this));
//
//   }.bind(this))
//   if (numberCompare.length >= 3 || colorCompare >= 3 || shapeCompare >= 3 || shadeCompare >= 3) {
//     return true
//   } else {
//     return false
//   }
// }

//false
// card1= { color: 'blue', shade: 'striped', number: '1', shape: 'circle' };
// card2= { color: 'blue', shade: 'striped', number: '2', shape: 'triangle' };
// card3= { color: 'blue', shade: 'striped', number: '2', shape: 'circle' };
//
// board = [card1, card2, card3]
//
// // true
// Card { color: 'blue', shade: 'blank', number: '2', shape: 'square' },
// Card { color: 'blue', shade: 'blank', number: '1', shape: 'square' },
// Card { color: 'blue', shade: 'blank', number: '3', shape: 'square' }
//
// //false
// Card { color: 'blue', shade: 'solid', number: '3', shape: 'square' },
//
// //
// Card { color: 'yellow', shade: 'striped', number: '1', shape: 'circle' },
// Card { color: 'yellow', shade: 'striped', number: '3', shape: 'square' },
//
// Card { color: 'red', shade: 'striped', number: '2', shape: 'triangle' },
// Card { color: 'red', shade: 'solid', number: '1', shape: 'circle' },
// Card { color: 'red', shade: 'striped', number: '3', shape: 'triangle' },
// Card { color: 'red', shade: 'striped', number: '1', shape: 'circle' },
// Card { color: 'red', shade: 'blank', number: '2', shape: 'square' },
// Card { color: 'red', shade: 'solid', number: '2', shape: 'triangle' },
// Card { color: 'red', shade: 'solid', number: '2', shape: 'circle' },

// var testArray = [card1, card2, card3];
// var incorrectArray = [card1, card2, card4];
//



//Load game
// console.log(board);
  // until Deck.length === 0 && !Board.containsValidSet()
    // click on card, adds it to "setArray"
    // once "setArray.length" === 3, compareSet
    // if true, validSet(setArray) && set.state{ sets: += 1 }
    // if !Board.containsValidSet()
      // addNewCards();
  // game over.
