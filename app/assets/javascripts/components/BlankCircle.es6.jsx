class BlankCircle extends React.Component {
  render() {
    let { color } = this.props;
    return(
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve"><g><path d="M50,100.083C22.383,100.083-0.084,77.615-0.084,50C-0.084,22.383,22.383-0.084,50-0.084   c27.616,0,50.083,22.468,50.083,50.084C100.083,77.615,77.615,100.083,50,100.083z M50,3.916C24.589,3.916,3.916,24.589,3.916,50   S24.589,96.083,50,96.083S96.083,75.41,96.083,50S75.41,3.916,50,3.916z" fill={color}/></g></svg>

    );
  }
}
