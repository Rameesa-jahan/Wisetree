/* eslint-disable */

import React from 'react'
import styles from './styles.module.scss'

const SectionTwo = () => {
    return (
        <div className={styles.sectionTwocontainer}>
            <h2 className={styles.heading}>what makes us unique</h2>
            <hr className={styles.hr} />
            <h1 className={styles.mainHeading}>Redefining success for B<span>2B Bra</span><span style={{color:'#10438686'}}>nds</span></h1>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img className={styles.learmorebtn} src="/learnMore.png" alt="" />
                </div>
                <div className={styles.item}>Wisetree Brands stands out for its commitment to deliver sustainable and high-performance growth for B2B organisations, through a unique, proprietary organic growth engineering methodology. A brand-first philosophy, and an agile, experienced team sets Wisetree Brands apart in the B2B marketing landscape.
                    Distinct from conventional methods, Wisetree uses a Brand-First Philosophy that focuses on sustainable, long-term growth, specifically adapted for the post-digital landscape.</div>
                <div className={styles.item}>Our strategies are designed to be an efficient investment, relative to revenue, delivering substantial returns such as increased ROI and enhanced customer loyalty. We focus on optimising Per Customer Spend by increasing the Lifetime Value (LTV) of the Client, through our brand-first approach. By building strong brand foundations and strengthening Marketing Operations, using our unique, proprietary 5D framework, we create long-term value that significantly reduces marketing costs. Learn how we apply this framework to guide businesses to success.</div>
            </div>
        </div>
    )
}

export default SectionTwo