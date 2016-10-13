class GameCard extends React.Component {

    findSVG(card) {
      if ((card.shape === "circle") && (card.shade === "solid")) {
        return <FilledCircle color={card.color}/>
      } else if ((card.shape === "circle") && (card.shade === "blank")) {
        return <BlankCircle color={card.color}/>
      } else if ((card.shape === "circle") && (card.shade === "striped")) {
        return <StripedCircle color={card.color}/>
      } else if ((card.shape === "square") && (card.shade === "solid")) {
        return <FilledSquare color={card.color}/>
      } else if ((card.shape === "square") && (card.shade === "blank")) {
        return <BlankSquare color={card.color}/>
      } else if ((card.shape === "square") && (card.shade === "striped") ){
        return <StripedSquare color={card.color}/>
      } else if ((card.shape === "triangle") && (card.shade === "solid")) {
        return <FilledTriangle color={card.color}/>
      } else if ((card.shape === "triangle") && (card.shade === "blank")) {
        return <BlankTriangle color={card.color}/>
      } else if ((card.shape === "triangle") && (card.shade === "striped")) {
        return <StripedTriangle color={card.color}/>
      }
    }

    drawIcon(card) {
      var cards = [];
      for(let i = 0; i < parseInt(card.number); i++) {
        cards.push(this.findSVG(card)
      )}
      return cards
    }

    onClickHandle(event) {
      const { createSet } = this.props
      const { id } = this.props
      card = event.target.closest('.card')
      $(card).css({"background-color": "#696969" })
      return createSet(id)
    }

  render() {
    let { shape, shade, number, color, id } = this.props.data;
    const { createSet } = this.props;
    return(
        <div className="col-md-4 card"  onClick={this.onClickHandle.bind(this)}>
          <div className="icon-container">
            { this.drawIcon(this.props.data) }
            </div>
        </div>
    )
  }
}
