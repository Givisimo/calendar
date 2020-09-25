import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import routes from '../../routes';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="row header-wrapper justify-content-between no-gutters align-content-around ">
        <NavLink to={routes.HOME} className="link col-auto">
          <img src={logo} alt={'Logo'} height={50} />
        </NavLink>
        <nav className="col-auto row align-content-around no-gutters">
          <ul className="row list-unstyled no-gutters font-weight-normal">
            <li className="nav-item list-item ">
              <NavLink
                to={routes.HOME}
                className="link text-uppercase"
                activeClassName="active-link"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item list-item">
              <NavLink
                to={routes.ABOUT}
                className="link text-uppercase"
                activeClassName="active-link"
              >
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
