import React from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as IconeHamburger } from '../img/icon-hamburger.svg';
import { ReactComponent as IconeClose } from '../img/icon-close.svg';
import imageIntro from '../img/image-intro-mobile.jpg';
import patternIntroLeft from '../img/bg-pattern-intro-left-mobile.svg';
import patternIntroRight from '../img/bg-pattern-intro-right-mobile.svg';
import patternNav from '../img/bg-pattern-mobile-nav.svg';
import useMedia from '../hooks/useMedia';
import styles from '../style/components/Header.module.scss';

const Header = () => {
  const mobile = useMedia('(max-width: 767px');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenu) document.body.classList.add(`${styles.removeScroll}`);
    else document.body.classList.remove(`${styles.removeScroll}`);
  }, [mobileMenu]);

  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        <nav>
          <a href="#">
            <Logo className={styles.logo} />
          </a>
          {mobile && (
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="menu"
              className={`${styles.buttonMenu}`}
            >
              {mobileMenu ? <IconeClose /> : <IconeHamburger />}
            </button>
          )}
          <ul className={`${styles.menu} ${mobileMenu && styles.menuActive}`}>
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
              <a href="#" className={styles.viewPlans}>View Plans</a>
            </li>
            <img
              src={patternNav}
              alt="Illustration"
              className={styles.illustration}
            />
          </ul>
        </nav>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.text}>
            {mobile && (
              <img
                src={patternIntroLeft}
                alt="Left Illustration"
                className={styles.illustrationLeft}
              />
            )}
            <h1 className={styles.title}>
              Humanizing <br /> your insurance.
            </h1>
            <p className={styles.paragraph}>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that´s right
              for you. Ensure you and loved ones are protected.
            </p>
            <a href="#" className={styles.link}>
              View Plans
            </a>
            {mobile && (
              <img
                src={patternIntroRight}
                alt="Right Illustration"
                className={styles.illustrationRight}
              />
            )}
          </div>
          <div className={styles.image}>
            <img src={imageIntro} alt="Family photo" />
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
