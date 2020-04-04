
import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import SourceLink from '../SourceLink';
import React from 'react';
import {  //Iconos
  MdAccountCircle,  MdViewCarousel,  MdHome
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
// UncontrolledTooltip,
import {
  Collapse, Nav, Navbar, NavItem, NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
    { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
];

const pageContents = [
  
  { to: '/login-modal', name: 'login modal', exact: false, Icon: MdViewCarousel },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar className="justify-content-md-center" style={{paddingBottom:'0px'}}>
            <SourceLink className="navbar-brand d-flex" style={{fontSize:'22pt'}}>
              <span className="text-white">
              <MdHome size={35} /> Home 
              </span>
            </SourceLink>
          </Navbar>

          <Nav vertical style={{marginTop:'12px'}}>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
           
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
