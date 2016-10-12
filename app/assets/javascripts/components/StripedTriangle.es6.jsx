class StripedTriangle extends React.Component {
  render() {
    let { color } = this.props;
    return(
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" x="0px" y="0px">
        <defs>
          <pattern id="striped"
                width="4" height="4"
                patternUnits="userSpaceOnUse">
                <rect width="4" height="2" fill={color}></rect>
              </pattern>
        </defs>
        <path d="M11.99 22.99c-0.002 0-0.005 0-0.007 0-1.1 0-2.061-0.597-2.575-1.486l-8.048-13.994c-0.252-0.431-0.4-0.948-0.4-1.5 0-1.659 1.342-3.005 3-3.010h16.071c1.656 0.001 2.998 1.344 2.998 3 0 0.556-0.151 1.077-0.415 1.524l-8.022 13.966c-0.523 0.903-1.484 1.5-2.585 1.5-0.005 0-0.010-0-0.015-0h0.001z" fill="url(#striped)"/></svg>


    );
  }
}
