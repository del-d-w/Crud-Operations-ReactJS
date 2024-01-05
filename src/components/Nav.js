import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6c90f5', color: '#fff', paddingLeft: '4%', paddingRight: '4%' }}>
      <a className="navbar-brand" href="#" style={{ color: '#fff' }}>
      <img src="https://i.ibb.co/fFyR2Jh/shopping-logo.png" alt="shopping-logo" border="0"
      style={{height:40,width:80}}
      />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#" style={{ color: '#fff' }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#fff' }}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#fff' }}>
              Products
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#fff' }}>
              Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#fff' }}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#fff' }}>
              <button className='btn btn-sm btn-danger'>Logout</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
