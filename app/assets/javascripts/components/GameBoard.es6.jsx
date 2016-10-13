class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: this.buildCards(),
      board: this.buildBoard(),
      chosenSet: []
    };
    // this.buildCards = this.buildCards.bind(this);
    // this.buildBoard = this.buildBoard.bind(this);
    this.addNewCards = this.addNewCards.bind(this);
    this.createSet = this.createSet.bind(this);
    this.compareSet = this.compareSet.bind(this);
    this.sameColor = this.sameColor.bind(this);
    this.uniqueColor = this.uniqueColor.bind(this);
    this.checkColor = this.checkColor.bind(this);

  }


//// Actually updates the state of the Board component ////
  buildBoard(){
    var deck = this.buildCards();
    array = []
    for(var i = 0; i < 9; i++) {
      var index = Math.floor(Math.random() * deck.length);
      var card = deck[index]
      array.push(card)
      deck.splice(index, 1)
      // this.setState({deck: this.state.deck.splice(index, 1) });
      }
    return array

    // .map((card, i) => Object.assign(card, {id: i}))
  }

  buildCards() {
    var colors = ["blue", "red", "green"];
    var numbers = ["1","2","3"];
    var shades = ["solid", "striped", "blank"];
    var shapes = ["circle", "square", "triangle"];
    array = []
     colors.forEach(function(color){
       numbers.forEach(function(number){
         shades.forEach(function(shade){
          shapes.forEach(function(shape){
            return array.push(new Card({"shape" : shape, "shade": shade, "number": number, "color" : color}))
          })
        })
      })
    })
    return array
  }

  removeStartCards(array) {
    return this.state.board.forEach(function(card){
      var index = this.state.board.indexOf(card)
      this.SetState({ deck: this.state.deck.splice(index, 1) })
    })
  }

  addNewCards() {
    const { deck, board } = this.state
    array = []
    for(var i = 0; i < 3; i++) {
      var index = this[Math.floor(Math.random() * deck.length)];
      // var index = this.state.deck.indexOf(card)
      array.push(card)
      // this.setState({deck: this.state.deck.splice(index, 1) });
      }
      if (board.length < 9) {
        return this.setState({ board: array.concat(board)});
      }
    }

  createSet(id){
    const { chosenSet, board } = this.state;
    var selectedCard = board[id];

    chosenSet.push(selectedCard);
    this.setState({chosenSet: chosenSet});

    if (chosenSet.length >= 3) {

      if (this.compareSet()) {
        this.removeSet();
      } else {
        alert("NOT A SET!")
        return this.setState({ chosenSet: [] })
      }
    }
  }

  removeSet(){
    const { chosenSet, board, deck } = this.state
    chosenSet.forEach(function(card){
      index = board.indexOf(card);
      board.splice(index, 1);
      deckIndex = deck.indexOf(card);
      deck.splice(deckIndex, 1);
    })
    this.setState({ chosenSet: []})
  }
      // compare the set to see if its validSet
      // if valid - remove these cards from the board array
      // and reset the chosenSet array

////// Only Compares the attributes of the Card /////
    compareSet() {
      if ( this.checkColor() && this.checkShape() && this.checkShade() && this.checkNumber() ) {
        return true
      } else {
        return false
      }
    }

    sameColor() {
      const { chosenSet, board } = this.state
      return chosenSet.every(function(card){
        return card.color === chosenSet[0].color
      })
    }

    uniqueColor() {
      const { chosenSet, board } = this.state
      var colors = ["blue", "green", "red" ];

      var arrayColors = chosenSet.map(function(card){
        return card.color
      }).sort()
      return arrayColors.toString() === colors.toString();
    }

    checkColor() {
      if (this.sameColor() || this.uniqueColor()){
        return true
      } else {
        return false
      }
    }

    sameShape() {
      const { chosenSet, board } = this.state
      return chosenSet.every(function(card){
        return card.shape === chosenSet[0].shape
      })
    }

    uniqueShape() {
      const { chosenSet, board } = this.state
      var shapes = ["circle", "square", "triangle"];

      var arrayShapes = chosenSet.map(function(card){
        return card.shape
      }).sort()
      return arrayShapes.toString() === shapes.toString();
    }

    checkShape() {
      if (this.sameShape() || this.uniqueShape()){
        return true
      } else {
        return false
      }
    }

    sameNumber() {
      const { chosenSet, board } = this.state
      return chosenSet.every(function(card){
        return card.number === chosenSet[0].number
      })
    };

    uniqueNumber() {
      const { chosenSet, board } = this.state
      var numbers = ["1","2","3"];
      var arrayNumbers = chosenSet.map(function(card){
        return card.number
      }).sort()
      return arrayNumbers.toString() === numbers.toString();
    }

    checkNumber() {
      if (this.sameNumber() || this.uniqueNumber()){
        return true
      } else {
        return false
      }
    }

    sameShade() {
      const { chosenSet, board } = this.state
      return chosenSet.every(function(card){
         return card.shade === chosenSet[0].shade
      })
    };

    uniqueShade() {
      const { chosenSet, board } = this.state
      var shades = ["blank", "solid", "striped"]
      var arrayShades = chosenSet.map(function(card){
        return card.shade
      }).sort()
      return arrayShades.toString() === shades.toString();
    }

    checkShade() {
      if (this.sameShade() || this.uniqueShade()){
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
      <div className="container">
        { this.state.board.map((card, i) => {

          return <GameCard data={card} id={i} key={i} createSet={this.createSet}/>;
        })}
        <p><a onclick={this.submitComparison}className="btn btn-primary btn-lg" href="#" role="button">Compare Your Set</a></p>
      </div>
    );
  }
}
