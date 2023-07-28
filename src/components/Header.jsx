import React from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as IconeHamburger } from '../img/icon-hamburger.svg';
import { ReactComponent as IconeClose } from '../img/icon-close.svg';
import useMedia from '../hooks/useMedia';

const Header = () => {
  const mobile = useMedia('(max-width: 767px');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <header>
      <nav>
        <Logo />
        <ul>
          <li>
            <a href="#">How We Work</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">View Plans</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
