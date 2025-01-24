/* eslint-disable */

import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
    const rows = 13;
    const dotsPerRow = 180;
    return (
        <div className={styles.footerContainer}>
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
            <div className={styles.flex}>
                <h1> Achieve your business goals today.
                    Book a discovery call now!</h1>
                <img className={styles.btnconnect} src="/btn-connect.png" alt="" />
            </div>
            <div className={styles.logoContainer}>
                <img className={styles.logoBg} src="/logo-bg.png" alt="" />
                <img className={styles.logoName} src="/logo-name.png" alt="" />
            </div>
            <hr className={styles.line} />
            <div className={styles.container}>
                <div className={styles.part1}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12.0452C3 16.1081 5.70534 19.5379 9.40044 20.7126C9.99428 20.9014 10.5605 20.4272 10.5605 19.8041V15.0778C10.5605 14.8017 10.3367 14.5778 10.0605 14.5778H8.81055C8.5344 14.5778 8.31055 14.354 8.31055 14.0778V12.5451C8.31055 12.269 8.5344 12.0451 8.81055 12.0451H10.0605C10.3367 12.0451 10.5605 11.8213 10.5605 11.5451V10.0552C10.5605 7.79389 12.0005 6.52756 14.0705 6.52756C14.5612 6.52756 15.1065 6.58243 15.6213 6.64943C15.8679 6.68152 16.0505 6.89311 16.0505 7.1418V8.515C16.0505 8.79114 15.8267 9.015 15.5505 9.015H14.8805C13.8005 9.015 13.5305 9.55771 13.5305 10.2813V11.5451C13.5305 11.8213 13.7544 12.0451 14.0305 12.0451H15.3292C15.6369 12.0451 15.8715 12.3203 15.823 12.6241L15.5779 14.1568C15.5391 14.3993 15.3298 14.5778 15.0841 14.5778H14.0282C13.753 14.5778 13.5295 14.8002 13.5282 15.0754L13.5057 19.7983C13.5027 20.4234 14.0701 20.9007 14.6655 20.7104C18.3478 19.5336 21 16.1056 21 12.0452C21 7.07035 16.95 3 12 3C7.05 3 3 7.07035 3 12.0452Z" stroke="#FCFFF9" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7632 18.1125C20.5 16.9101 20.5 15.2734 20.5 12C20.5 8.72657 20.5 7.08985 19.7632 5.88751C19.3509 5.21473 18.7853 4.64908 18.1125 4.2368C16.9101 3.5 15.2734 3.5 12 3.5C8.72657 3.5 7.08985 3.5 5.88751 4.2368C5.21473 4.64908 4.64908 5.21473 4.2368 5.88751C3.5 7.08985 3.5 8.72657 3.5 12C3.5 15.2734 3.5 16.9101 4.2368 18.1125C4.64908 18.7853 5.21473 19.3509 5.88751 19.7632C7.08985 20.5 8.72657 20.5 12 20.5C15.2734 20.5 16.9101 20.5 18.1125 19.7632C18.7853 19.3509 19.3509 18.7853 19.7632 18.1125Z" stroke="#FCFFF9" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5 7C17.5 7.27614 17.2761 7.5 17 7.5C16.7239 7.5 16.5 7.27614 16.5 7C16.5 6.72386 16.7239 6.5 17 6.5C17.2761 6.5 17.5 6.72386 17.5 7Z" stroke="#FCFFF9" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#FCFFF9" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9062 12.9375L5 19.5M10.9062 12.9375L15.4701 19.4573C15.4889 19.4841 15.5194 19.5 15.5521 19.5H18.8079C18.8888 19.5 18.9363 19.4089 18.8899 19.3427L12.875 10.75M10.9062 12.9375L5.11014 4.65735C5.06375 4.59107 5.11116 4.5 5.19207 4.5H8.44793C8.48057 4.5 8.51114 4.51592 8.52986 4.54265L12.875 10.75M12.875 10.75L18.5 4.5" stroke="#FCFFF9" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8463 5H6.15374C3.85969 5 2 6.83965 2 9.10898V14.891C2 17.1603 3.85969 19 6.15374 19H17.8463C20.1403 19 22 17.1603 22 14.891V9.10898C22 6.83965 20.1403 5 17.8463 5ZM15.0371 12.2813L9.56814 14.8616C9.42241 14.9303 9.25408 14.8252 9.25408 14.6655V9.34374C9.25408 9.18177 9.42684 9.0768 9.57287 9.15001L15.0418 11.8916C15.2044 11.973 15.2016 12.2037 15.0371 12.2813Z" stroke="#FCFFF9" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="#FCFFF9" fill-opacity="0.85" />
                    </svg>

                </div>
                <div className={styles.part2}>
                    <p>About</p>
                    <p>Service</p>
                    <p>Blog</p>
                    <p>Case Study</p>
                    <p>Work</p>
                    <p>Career</p>
                </div>
                <div className={styles.part3}>
                    © 2024 wisetree. All Rights Reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer