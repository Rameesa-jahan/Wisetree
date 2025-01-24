/* eslint-disable */

import React from 'react';
import styles from './styles.module.scss';



const Wisetree = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', position: 'absolute', top: '-2px', left: '30px' }}>
                    <img className={styles.logoImg} src={'/logo.png'}  alt='' />
                    <div>
                        <h1 style={{ margin: 0, color:'black' }}>Wisetree</h1>
                        <span style={{ letterSpacing: '5px', color: 'black' }}>Brands</span>
                    </div>
                </div>

                <div style={{ position: 'absolute', top: '30%', width: '100%' }}>
                    <h1 className={styles.heading} style={{ textAlign: 'right' }}>
                        Don’t just Keep U
                    </h1>
                    <h1 className={styles.heading2} style={{ textAlign: 'left', marginLeft: '-50px' }}>
                        Up, OUTRUN
                    </h1>
                </div>
                <div className={styles.CircleButton}>
                    <h1 className={styles.btnText}> LETS TALK</h1>
                </div>
                <div className={styles.bgImages}>
                    <img className={styles.bgImage} src={'/Group 8.png'} alt='' />
                    <img className={styles.bgImageRight}  src={'/Group 9.png'}alt='' />
                </div>
                <div>
                    <p className={styles.para}>
                        Wisetree Brands is your trusted partner to help you stand out, craft sustainable Brand strategies, and create a lasting impression.
                    </p>
                </div>
                <div className={styles.contactUs}>
                    <img className={styles.logo} src={'/logo.png'} alt='' />
                    <div className={styles.contactContent}>
                        <div className={styles.contactSvg}>
                            <svg width="28" height="9" viewBox="0 0 28 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="1.03333" x2="28" y2="1.03334" stroke="white" strokeWidth="1.93333" />
                                <line x1="0" y1="8.03333" x2="23.3333" y2="8.03333" stroke="white" strokeWidth="1.93333" />
                            </svg>
                        </div>
                        <button className={styles.contactButton}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wisetree;


