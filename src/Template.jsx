import React from 'react';

const Template = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <h1 className="header__title">appshell with edge</h1>
    </header>

    <main className="main">
      <div className="card">
        {children}
      </div>
    </main>
  </React.Fragment>
);

export default Template;
