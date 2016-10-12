class GameCard extends React.Component {
  render() {
    return(
      <div className="row">
      <div className="card">

          <FilledCircle/>

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
