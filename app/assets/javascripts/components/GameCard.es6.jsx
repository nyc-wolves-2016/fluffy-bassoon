class GameCard extends React.Component {
  render() {
    let { shape, shade, number, color } = this.props.card;
     return(

      <div className="row">
      <div className="card">

      for (var i = 0; i < {number}; i++) {
        if ({shape} === "circle") && ({shade} === "solid") {
          <FilledCircle color={color}/>
        } else if ({shape} === "circle") && ({shade} === "blank") {
          <BlankCircle color={color}/>
        } else if ({shape} === "circle") && ({shade} === "striped") {
          <StripedCircle color={color}/>
        } else if ({shape} === "square") && ({shade} === "solid") {
          <FilledSquare color={color}/>
        } else if ({shape} === "square") && ({shade} === "blank") {
          <BlankSquare color={color}/>
        } else if ({shape} === "square") && ({shade} === "striped") {
          <StripedSquare color={color}/>
        } else if ({shape} === "triangle") && ({shade} === "solid") {
          <FilledTriangle color={color}/>
        } else if ({shape} === "triangle") && ({shade} === "blank") {
          <BlankTriangle color={color}/>
        } else if ({shape} === "triangle") && ({shade} === "striped") {
          <StripedTriangle color={color}/>
        }
      }



          <object data="/shapes/filled_circle.svg" type="image/svg+xml">
          </object>

          <object data="/shapes/filled_circle.svg" type="image/svg+xml">
          </object>

      </div>

      <div className="card">
          <object data="/shapes/filled_square.svg" type="image/svg+xml">
          </object>
      </div>

      <div className="card">
          <object data="/shapes/filled_triangle.svg" type="image/svg+xml">
          </object>
      </div>
    </div>
    )
  }
}
