class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [],
      deck: [],
      chosenSet: []
    };
    this.createSet = this.createSet.bind(this)
  }
  componentWillMount() {
    buildBoard();
    validSetsOnBoard();
  }

  createSet(event){
    event.preventDefault();
    debugger
    this.setState({chosenSet: [event.target].concat(chosenSet)})
  }
  render() {
    return(
      <div className="jumbotron">
        { Board.map((card, i) => {
          return <GameCard data={card} id={i} key={i} createSet={this.createSet}/>;
        })}
      </div>
    );
  }
}
