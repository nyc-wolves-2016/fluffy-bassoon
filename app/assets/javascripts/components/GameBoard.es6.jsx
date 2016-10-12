class GameBoard extends React.Component {
  constructor() {
    super();
    // this.buildBoard = this.builBoard.bind(this);
    // this.addNewCards = this.addNewCards.bind(this);
    //
    // this.createSet = this.createSet.bind(this);
    // this.validSet = this.validSet.bind(this);
    // this.compareSet = this.compareSet.bind(this);
    //
    // this.sameColor = this.sameColor.bind(this);
    // this.uniqueColor = this.uniqueColor.bind(this);
    // this.checkColor = this.checkColor.bind(this);
    //
    // this.sameShape = this.sameShape.bind(this);
    // this.uniqueShape = this.uniqueShape.bind(this);
    // this.checkShape = this.checkShape.bind(this);
    //
    // this.sameShade = this.sameShade.bind(this);
    // this.checkShade = this.checkShade.bind(this);
    // this.uniqueShade = this.uniqueShade.bind(this);
    //
    // this.sameNumber = this.sameNumber.bind(this);
    // this.uniqueNumber = this.uniqueNumber.bind(this);
    // this.checkNumber = this.checkNumber.bind(this);
    //
    // this.checkBoard = this.checkBoard.bind(this);
    // this.validSetsOnBoard = this.validSetsOnBoard.bind(this);
    // this.buildCards = this.buildCards.bind(this);
    this.state = {
      board: [],
      deck: [],
      chosenSet: []
    };
  }
  componentWillMount(){
    newDeck = this.buildCards();
    this.setState({ deck: "test" });
    debugger
  }
  componentDidMount() {
    this.buildBoard();
    this.state.board.map((card, i) => Object.assign(card, {id: i}));
  }

//// Actually updates the state of the Board component ////
  addNewCards() {
    this.randomCards(3)
  }

  randomCards(number) {
    newBoard = []
    for(var i = 0; i < number; i++) {
      var card = this[Math.floor(Math.random() * this.length)]
      var index = this.state.deck.indexOf(card)
      newBoard.push(card)
      this.setState({deck: this.state.deck.splice(index, 1) });
      }
    this.setState({board: newBoard })
    }

  buildBoard(){
    this.randomCards(9)
  }




  createSet(event, id){
    const { chosenSet, board } = this.state
    const selectedCard = board.find(card => card.id)
    if (chosenSet.length < 3) {
      chosenSet.push(selectedCard)
      this.setState({chosenSet: chosenSet})
    } else if (compareSet(chosenSet)) {
      board.removeSet(chosenSet)
      board.push(addNewCards())
      this.setState({board: board})
    }
  }

  validSet(setArray) {
    removeSet(setArray);
    addNewCards();
  }

  removeSet(set) {
    this.forEach(function(card){
      var index = this.state.board.indexOf(card)
      this.setState({board: this.state.board.splice(index, 1)});
    })
  }

  buildCards() {
    var colors = ["blue", "red", "yellow"];
    var numbers = ["1","2","3"];
    var shades = ["solid", "striped", "blank"];
    var shapes = ["circle", "square", "triangle"];
    newDeck = []
    colors.forEach(function(color){
      numbers.forEach(function(number){
        shades.forEach(function(shade){
          shapes.forEach(function(shape){
            var card = new Card({"shape" : shape, "shade": shade, "number": number, "color" : color})
            newDeck.push(card);
          })
        })
      })
    })
    return newDeck
  }



////// Only Compares the attributes of the Card /////
    compareSet(setArray) {
      if ( checkColor(setArray) && checkShape(setArray) && checkShade(setArray) && checkNumber(setArray) ) {
        return true
      } else {
        return false
      }
    }

    sameColor(array) {
      return array.every(function(card){
        return card.color === array[0].color
      })
    }

    uniqueColor(array) {
      arrayColors = array.map(function(card){
        return card.color
      }).sort()
      return arrayColors.toString() === colors.toString();
    }

    checkColor(array) {
      if (sameColor(array) || uniqueColor(array)){
        return true
      } else {
        return false
      }
    }

    sameShape(array) {
      return array.every(function(card){
        return card.shape === array[0].shape
      })
    }

    uniqueShape(array) {
      arrayShapes = array.map(function(card){
        return card.shape
      }).sort()
      return arrayShapes.toString() === shapes.toString();
    }

    checkShape(array) {
      if (sameShape(array) || uniqueShape(array)){
        return true
      } else {
        return false
      }
    }

    sameNumber(array) {
      return array.every(function(card){
        return card.number === array[0].number
      })
    };

    uniqueNumber(array) {
      arrayNumbers = array.map(function(card){
        return card.number
      }).sort()
      return arrayNumbers.toString() === numbers.toString();
    }

    checkNumber(array) {
      if (sameNumber(array) || uniqueNumber(array)){
        return true
      } else {
        return false
      }
    }

    sameShade(array) {
      return array.every(function(card){
         return card.shade === array[0].shade
      })
    };

    uniqueShade(array) {
      arrayShades = array.map(function(card){
        return card.shade
      }).sort()
      return arrayShades.toString() === shades.toString();
    }

    checkShade(array) {
      if (sameShade(array) || uniqueShade(array)){
        return true
      } else {
        return false
      }
    }

  checkBoard(card){
    this.state.board.find(function(card){
      return compareSet(card)
    })
  }

  validSetsOnBoard() {
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


  render() {
    console.log("Yo this is the boards currrent state", this.state)
    return(
      <div className="jumbotron">
        { this.state.board.map((card, i) => {

          return <GameCard data={card} id={i} key={i} createSet={this.createSet}/>;
        })}
      </div>
    );
  }
}
