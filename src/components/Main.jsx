import React from 'react';
import { ReactComponent as SnappyProcess } from '../img/icon-snappy-process.svg';
import { ReactComponent as AffordablePrices } from '../img/icon-affordable-prices.svg';
import { ReactComponent as PeopleFirst } from '../img/icon-people-first.svg';
import illustrationPattern from '../img/bg-pattern-how-we-work-mobile.svg';
import illustrationPatternDesktop from '../img/bg-pattern-how-we-work-desktop.svg';
import styles from '../style/components/Main.module.scss';
import useMedia from '../hooks/useMedia';

const Main = () => {
  const desktop = useMedia('(min-width: 1000px)');
  const tablet = useMedia('(min-width: 768px)');

  return (
    <main className={styles.container}>
      <section className={styles.mainContent}>
        <h2 className={desktop ? 'grid-12' : ''}>We´re Different</h2>
        <div className={styles.containerCards}>
          <div className={`${desktop ? 'grid-4' : ''} ${styles.card}`}>
            <SnappyProcess className={styles.image} />
            <h4>Snappy Process</h4>
            <p>
              Our application process can be completed in minutes, not hours.
              Dont´t get stuck filling in tedious forms
            </p>
          </div>
          <div className={`${desktop ? 'grid-4' : ''} ${styles.card}`}>
            <AffordablePrices className={styles.image} />
            <h4>Affordable Prices</h4>
            <p>
              We don´t you worrying about high monthly costs. Our prices may be
              low, but we still offer the coverage possible.
            </p>
          </div>
          <div className={`${desktop ? 'grid-4' : ''} ${styles.card}`}>
            <PeopleFirst className={styles.image} />
            <h4>People First</h4>
            <p>
              Our plans aren`t full of conditions and clauses to prevent
              payouts. We make sure you´re covered when you nedd it.
            </p>
          </div>
        </div>
      </section>
      <aside className={styles.callToAction}>
        <h3>Find out more about how we work</h3>
        <a href="#" className={styles.button}>
          How We Work
        </a>
        {tablet ? (
          <img
            src={illustrationPatternDesktop}
            alt="Illustration"
            className={styles.illustration}
          />
        ) : (
          <img
            src={illustrationPattern}
            alt="Illustration"
            className={styles.illustration}
          />
        )}
      </aside>
    </main>
  );
};

export default Main;
