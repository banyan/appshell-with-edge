import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../lib/fakeAuth';
import Navi from '../Navi';
import Template from '../Template';

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated() ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Log out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const Dashboard = () => (
  <Template>
    <h2>Dashboard</h2>
    <Navi />
    <AuthButton />
  </Template>
);

export default Dashboard;
