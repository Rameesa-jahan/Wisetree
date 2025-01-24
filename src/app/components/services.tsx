import React from 'react';
import styles from './styles.module.scss'

const Services = () => {
  const rows = 13;
  const dotsPerRow = 180;
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.dotGrid}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.dotRow}>
            {Array.from({ length: dotsPerRow }).map((_, dotIndex) => {
              const opacity = rowIndex < 4
                ? 0.1 + rowIndex * 0.2
                : rowIndex > 8
                  ? 0.6 - (rowIndex - 8) * 0.2
                  : 1;

              return (
                <div
                  key={`${rowIndex}-${dotIndex}`}
                  className={styles.dot}
                  style={{ opacity }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      <h1> Services</h1>
      <div>
        <h1 className={styles.mainHeading}>Empowering B2B Leaders to scale O<span>rgani</span><span style={{ color: '#10438686' }}>cally</span></h1>
      </div>
      <div className={styles.cardDiv}>
        <div className={styles.card1}></div>
        <div className={styles.card2}></div>
        <div className={styles.card3}></div>
        <div className={styles.card4}></div>
      </div>
    </div>
  )
}

export default Services