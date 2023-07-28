import React from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as IconeHamburger } from '../img/icon-hamburger.svg';
import { ReactComponent as IconeClose } from '../img/icon-close.svg';
import useMedia from '../hooks/useMedia';
import styles from '../style/components/Header.module.scss' ;

const Header = () => {
  const mobile = useMedia('(max-width: 767px');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <header>
      <nav>
        <Logo />
        {mobile && (
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label='menu'
            className={`${styles.botaoMenu}`}
          >
            {mobileMenu ? <IconeClose /> : <IconeHamburger />}
          </button>
        )}
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

      <main>
        <div>
          <div>
            {mobile && <img src={patternIntroLeft} alt="Left Illustration" />}
            <h1>
              Humanizing <br /> your insurance.
            </h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that´s right for
              you. Ensure you and loved ones are protected.
            </p>
            <a href="#">View Plans</a>
            {mobile && <img src={patternIntroRight} alt="Right Illustration" />}
          </div>
          <div>
            <img src={imageIntro} alt="Family photo" />
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
