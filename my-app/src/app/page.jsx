// app/page.js
import React from 'react';
import Forms from './components/Forms';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>YouTube Link Collector</h1>
      <Forms />
    </div>
  );
};

export default Home;
