class HomeTabs extends React.Component {


  render() {
    const { TabToggle } = this.props;

    return(
      <div>
        <ul className="nav nav-tabs menu-tabs" role="tablist">
          <li role="presentation" className="active" onClick={TabToggle}>
            <a href="#login" aria-controls="login" role="tab" data-toggle="tab">Login</a>
          </li>
          <li role="presentation" onClick={TabToggle}>
            <a href="#register" aria-controls="register" role="tab" data-toggle="tab">Signup</a>
          </li>
        </ul>

        <div className="tab-content">

          <div role="tabpanel" className="tab-pane fade in active" id="login">
            <SigninForm />
          </div>

          <div role="tabpanel" className="tab-pane fade" id="register">
            <RegisterForm />
          </div>

        </div>
      </div>
    );
  }
}
