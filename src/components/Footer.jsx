import React from 'react';
import styles from '../style/components/Footer.module.scss';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Facebook } from '../img/icon-facebook.svg';
import { ReactComponent as Twitter } from '../img/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../img/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../img/icon-instagram.svg';
import illustration from '../img/bg-pattern-footer-mobile.svg';
import illustrationDesktop from '../img/bg-pattern-footer-desktop.svg';
import useMedia from '../hooks/useMedia';

const Footer = () => {
  const tablet = useMedia('(min-width: 768px)');

  return (
    <footer>
      <img src={illustration} alt="Illustration" />
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo />
          <div className={styles.socialMedia}>
            <Facebook className={styles.media} />
            <Twitter className={styles.media} />
            <Pinterest className={styles.media} />
            <Instagram className={styles.media} />
          </div>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.linkBox}>
            <h4>Our Company</h4>
            <ul className={styles.linkList}>
              <li><a href="#">How We Work</a></li>
              <li><a href="#">Why Insure?</a></li>
              <li><a href="#">Check Price</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
          <div className={styles.linkBox}>
            <h4>Help Me</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Faq</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className={styles.linkBox}>
            <h4>Contacts</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Live Chat</a></li>
            </ul>
          </div>
          <div className={styles.linkBox}>
            <h4>Others</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
        </main>
      </div>
    </footer>
  );
};

export default Footer;
