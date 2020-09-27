import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import routes from '../../routes';
import './Header.scss';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [openClsBtn, setOpenClsBtn] = useState(false);
  const openMenu = () => {
    setMenu(prevState => !prevState);
    setOpenClsBtn(prevState => !prevState);
  };

  //todo решить вопрос с menu - при смене размера экрана не появляется - проблема в буле. Может, просто библиотека?

  return (
    <header>
      <div className="row header-wrapper justify-content-between no-gutters align-content-around ">
        <NavLink to={routes.HOME} className="link col-auto">
          <img src={logo} alt={'Logo'} height={50} />
        </NavLink>

        <button className="btn custom-display" onClick={openMenu}>
          {openClsBtn ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </button>

        {menu && (
          <nav className="col-auto row align-content-around no-gutters ">
            <ul className="row list-unstyled no-gutters font-weight-normal">
              <li className="nav-item list-item">
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
        )}
      </div>
    </header>
  );
};

export default Header;
