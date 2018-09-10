import React from 'react';
import fakeAuth from '../lib/fakeAuth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  login = () => {
    fakeAuth.authenticate(() => {
      this.forceUpdate();
    })
  }

  render() {
    if (fakeAuth.isAuthenticated()) {
      return (
        <Redirect to={{
          pathname: '/'
        }}/>
      )
    }

    return (
      <div className="login__inner">
        <div className="login__logo"></div>
        <div className="login__body">
          <div className="login__body-inner">
            <h2>Login</h2>
            <p>
              <input type="email" />
            </p>
            <p>
              <input type="password" />
              <br />
              <span>Forgot password</span>
            </p>
            <p>
              <button onClick={this.login}>Log in</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
