import React from 'react'
import styles from './styles.module.scss';

const SectionThree = () => {
    return (
        <div className={styles.sectionThreecontainer} >
            <div style={{ marginTop: '160px' }} className={styles.gridcontainer}>
                <div className={styles.item1}>We are the B2B branding experts who create long-term value for brands, which ultimately translates into deeper connections with Prospects and Clients. Our sustainable, integrated marketing, communication, and partnership strategies drive substantial ROI growth and significantly enhance trust and client loyalty, which are critical</div>
                <div className={styles.item2}>
                    <div className={styles.item2}>
                        <span style={{ color: 'rgba(255, 255, 255, 1)' }}>Who</span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}> We </span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Are</span>
                    </div>
                </div>
                <div className={styles.item1}>for long-term business relationships and sustained success​. As a B2B Brand and Marketing Consulting Firm we are at the forefront of redefining success metrics that we achieve through consistent, and customised engineered efforts.</div>
                <div>
                    <img className={styles.learnmoreImg} src="/learmoreWhite.png" alt="lo" />
                </div>
            </div>
            <div className={styles.gridcontainer}>
                <div></div>
                <div> <img src="/img1.png" alt="img" /></div>
                <div> <img src="/img2.png" alt="img" /></div>
                <div> <img src="/img3.png" alt="img" /></div>
            </div>
        </div>
    )
}

export default SectionThree