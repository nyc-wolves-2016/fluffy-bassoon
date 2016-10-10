class RegisterForm extends React.Component {
  render() {
    return(
      <form className="form-horizontal">
        <div className="form-group">
        <label htmlFor="inputUsername3" className="col-sm-2 control-label">Username</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputUsername3" placeholder="Username" />
        </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputConfirmPassword3" className="col-sm-2 control-label">Password Confirmation</label>
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
    );
  }
}
