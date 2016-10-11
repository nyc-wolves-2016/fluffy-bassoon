class RegisterForm extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }
    this.userNameChange = this.userNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.passwordConfirmChange = this.passwordConfirmChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  userNameChange(event) {
    this.setState( { username: event.target.value } );
    console.log(this.state);
  };

  emailChange(event) {
    this.setState( { email: event.target.value });
  };

  passwordChange(event) {
    this.setState( { password: event.target.value });
  };

  passwordConfirmChange(event) {
    this.setState( { passwordConfirmation: event.target.value });
  };

  registerUser(event){
    data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    }

    $.ajax({
      url: '/register',
      method: 'POST',
      data: data
    })
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return(
      <form onSubmit={this.registerUser} className="form-horizontal">
        <div className="form-group">
        <label htmlFor="inputUsername3" className="col-sm-2 control-label">Username</label>
        <div className="col-sm-10">
          <input type="text" onChange={this.userNameChange} value={username} className="form-control" id="inputUsername3" placeholder="Username" />
        </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" onChange={this.emailChange} value={email} className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onChange={this.passwordChange} value={password} className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputConfirmPassword3" className="col-sm-2 control-label">Password Confirmation</label>
          <div className="col-sm-10">
            <input type="password" onChange={this.passwordConfirmChange} value={passwordConfirmation} className="form-control" id="inputConfirmPassword3" placeholder="Confirm Password" />
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
