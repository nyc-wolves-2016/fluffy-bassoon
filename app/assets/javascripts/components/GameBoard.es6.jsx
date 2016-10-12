class GameBoard extends React.Component {
  constructor() {
    super();
    buildBoard();
    this.state = {
      board: Board.map((card, i) => Object.assign(card, {id: i})),
      deck: Deck,
      chosenSet: []
    };
    this.createSet = this.createSet.bind(this)
  }
  componentWillMount() {
    validSetsOnBoard();
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
