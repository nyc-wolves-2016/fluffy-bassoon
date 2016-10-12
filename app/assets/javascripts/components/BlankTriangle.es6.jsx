class BlankTriangle extends React.Component {
  render() {
    let { color } = this.props;
    return(
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" x="0px" y="0px"><path d="M11.99 20.99c0.004 0 0.008 0 0.012 0 0.368 0 0.689-0.204 0.856-0.505l8.033-13.975c0.087-0.143 0.138-0.315 0.138-0.5s-0.051-0.357-0.14-0.504c-0.165-0.296-0.48-0.496-0.842-0.496-0.005 0-0.011 0-0.016 0h-16.069c-0.001 0-0.003 0-0.004 0-0.552 0-1 0.448-1 1 0 0.184 0.050 0.357 0.137 0.505l8.037 13.965c0.168 0.306 0.488 0.51 0.856 0.51 0.001 0 0.003 0 0.004 0zM11.99 22.99c-0.002 0-0.005 0-0.007 0-1.1 0-2.061-0.597-2.575-1.486l-8.048-13.994c-0.252-0.431-0.4-0.948-0.4-1.5 0-1.659 1.342-3.005 3-3.010h16.071c1.656 0.001 2.998 1.344 2.998 3 0 0.556-0.151 1.077-0.415 1.524l-8.022 13.966c-0.523 0.903-1.484 1.5-2.585 1.5-0.005 0-0.010-0-0.015-0h0.001z" fill={color}/></svg>

    );
  }
}
