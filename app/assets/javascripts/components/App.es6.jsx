class App extends React.Component {
  constructor() {
    super();
    this.TabToggle = this.TabToggle.bind(this);
  }



  TabToggle() {
    $('.menu-tabs').click('a', function(e) {
      e.preventDefault()

      $(this).tab('show');
    })
  }

  render() {
    return(
      <div>
        <HomeTabs TabToggle={this.TabToggle}/>

        <GameBoard />

          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    );
  }
}
