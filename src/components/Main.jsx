import React from 'react';
import { ReactComponent as SnappyProcess } from '../img/icon-snappy-process.svg';
import { ReactComponent as AffordablePrices } from '../img/icon-affordable-prices.svg';
import { ReactComponent as PeopleFirst } from '../img/icon-people-first.svg';
import illustrationPattern from '../img/bg-pattern-how-we-work-mobile.svg';
import styles from '../style/components/Main.module.scss';

const Main = () => {
  return (
    <main className={styles.container}>
      <section className={styles.mainContent}>
        <h2 className={styles.title}>We´re Different</h2>
        <div className={styles.card}>
          <SnappyProcess className={styles.image} />
          <h4>Snappy Process</h4>
          <p>
            Our application process can be completed in minutes, not hours.
            Dont´t get stuck filling in tedious forms
          </p>
        </div>
        <div className={styles.card}>
          <AffordablePrices className={styles.image} />
          <h4>Affordable Prices</h4>
          <p>
            We don´t you worrying about high monthly costs. Our prices may be
            low, but we still offer the coverage possible.
          </p>
        </div>
        <div className={styles.card}>
          <PeopleFirst className={styles.image} />
          <h4>People First</h4>
          <p>
            Our plans aren`t full of conditions and clauses to prevent payouts.
            We make sure you´re covered when you nedd it.
          </p>
        </div>
      </section>
      <aside className={styles.callToAction}>
        <h3>Find out more about how we work</h3>
        <a href="#" className={styles.button}>
          How We Work
        </a>
        <img
          src={illustrationPattern}
          alt="Illustration"
          className={styles.illustration}
        />
      </aside>
    </main>
  );
};

export default Main;
