import React from 'react'
import styles from './styles.module.scss'

const ThroughoutFlow = () => {
    return (
        <div className={styles.flowContainer}>
            <h4> ThroughoutFlow </h4>
            <hr className={styles.hr} />
            <div className={styles.gridContainer}>
                <div className={styles.item1}></div>
                <div className={styles.item2}>
                    <div className={styles.text}>
                        <h5>Oct 15, 2024</h5> | <h5> Brand Identity</h5>
                    </div>
                    <h2 style={{marginTop:'30px'}}>
                        Define a unique and clear brand identity that resonates with the relevant target audience
                    </h2>
                    <button> View Blog</button>
                </div>
                <div className={styles.item3}></div>
            </div>
        </div>
    )
}

export default ThroughoutFlow