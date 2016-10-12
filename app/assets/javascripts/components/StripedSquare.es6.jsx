class StripedSquare extends React.Component {
  render() {
    let { color } = this.props;
    return(

      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve"><g>
        <defs>
            <pattern id="striped"
                  width="4" height="4"
                  patternUnits="userSpaceOnUse">
                  <rect width="4" height="2" fill={color}></rect>
                </pattern>
        </defs>
      <path d="M99,99H1V1h98V99z" fill="url(#striped)"/></g></svg>

    );
  }
}
