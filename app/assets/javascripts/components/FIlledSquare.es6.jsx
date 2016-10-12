class FilledSquare extends React.Component {
  render() {
    let { color } = this.props;
    return(
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve"><g>
      <path d="M99,99H1V1h98V99z" fill={color}/></g></svg>
    );
  }
}
