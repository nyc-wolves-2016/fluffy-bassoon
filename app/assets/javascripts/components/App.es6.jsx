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
        <div>
          <h1> This is where the board goes</h1>
        </div>
      </div>


    );
  }
}
