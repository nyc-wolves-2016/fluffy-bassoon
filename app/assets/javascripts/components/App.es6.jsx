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

        <div className="jumbotron">
          <h1>This is where the game board will be</h1>
          <div className="row">
            <div className="col-xs-4 col-md-2">
              <a href="#" className="thumbnail">
                <object data="/shapes/filled_circle.svg" type="image/svg+xml">
                </object>
              </a>
            </div>

            <div className="col-xs-4 col-md-2">
              <a href="#" className="thumbnail">
                <object data="/shapes/filled_circle.svg" type="image/svg+xml">
                </object>
              </a>
            </div>

            <div className="col-xs-4 col-md-2">
              <a href="#" className="thumbnail">
                <object data="/shapes/filled_circle.svg" type="image/svg+xml">
                </object>
              </a>
            </div>
          </div>



          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    );
  }
}
