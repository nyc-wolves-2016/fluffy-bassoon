class App extends React.Component {
  render() {
    return(
      <div>


  <ul className="nav nav-tabs" role="tablist">
    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Login</a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Signup</a></li>
  </ul>

  <div className="tab-content">
    <div role="tabpanel" className="tab-pane fade in active" id="home">
    <form className="form-horizontal">
      <div className="form-group">
        <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
        </div>
      </div>
      <div className="form-group">
        <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-default">Sign in</button>
        </div>
      </div>
      </form>

    </div>

    {/* this is where the first tab ends  */}

    <div role="tabpanel" class="tab-pane fade" id="profile">
    <form className="form-horizontal">
      <div className="form-group">
      <label for="inputUsername3" className="col-sm-2 control-label">Username</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="inputUsername3" placeholder="Username" />
      </div>
      </div>

      <div className="form-group">
        <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
        </div>
      </div>
      <div className="form-group">
        <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
        </div>
      </div>

      <div className="form-group">
        <label for="inputConfirmPassword3" className="col-sm-2 control-label">Password Confirmation</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputConfirmPassword3" placeholder="Confirm Password" />
        </div>
      </div>


      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-default">Register</button>
        </div>
      </div>
      </form>
    </div>


  </div>

</div>
    );
  }
}
