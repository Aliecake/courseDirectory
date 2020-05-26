import React from 'react';
import Nprogress from 'nprogress';
// import Router from 'next/router';

//progress loading bar
Nprogress.start()
Nprogress.done()


const Header = () => (
  <div className="header">
    <div className="bounds">
      <h1 className="header--logo">Course Library</h1>
    </div>
  </div>
)

export default Header;