import * as React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => (
  <div>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);

export default Navi;
