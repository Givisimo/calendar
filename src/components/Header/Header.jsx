import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
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

  const resetMenuState = () => {
    setMenu(false);
    setOpenClsBtn(false);
  };

  return (
    <header>
      <Media
        queries={{ mobile: { maxWidth: 767 } }}
        onChange={() => resetMenuState()}
      >
        {matches =>
          matches.mobile ? (
            <div className="row header-wrapper justify-content-between no-gutters  ">
              <NavLink
                to={routes.HOME}
                className="link col-auto align-self-center "
              >
                <img src={logo} alt={'Logo'} className="logo" />
              </NavLink>
              <div className="col-auto row align-content-around no-gutters ">
                {menu && (
                  <nav>
                    <ul className=" list-unstyled no-gutters font-weight-normal text-right">
                      <li className="nav-item list-item col-12">
                        <NavLink
                          to={routes.HOME}
                          className="link text-uppercase"
                          activeClassName="active-link"
                          exact
                        >
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item list-item col-12">
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
                <button className="btn " onClick={openMenu}>
                  {openClsBtn ? (
                    <i className="fas fa-times icon-size" />
                  ) : (
                    <i className="fas fa-bars icon-size" />
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="row header-wrapper justify-content-between no-gutters align-content-around ">
              <NavLink to={routes.HOME} className="link col-auto ">
                <img src={logo} alt={'Logo'} className="logo" />
              </NavLink>
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
            </div>
          )
        }
      </Media>
    </header>
  );
};

export default Header;
