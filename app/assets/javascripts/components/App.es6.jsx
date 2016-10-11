class App extends React.Component {
  constructor() {
    super();
    this.TabToggle = this.TabToggle.bind(this);
  }
  componentWillMount() {
    buildBoard();
    validSetsOnBoard();
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
        <div>
          <p className="testBoard"> This is where the board goes</p>
        </div>
      </div>


    );
  }
}
