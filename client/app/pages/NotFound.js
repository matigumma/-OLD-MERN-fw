import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="d-flex align-items-center flex-column justify-content-center h-100">
    <h2>Page not found</h2>
    <p>{JSON.stringify(this.props.match, null, 2)}</p>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFound;
