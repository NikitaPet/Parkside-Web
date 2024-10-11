'use client'

import React from 'react'
import cn from 'classnames'

import styles from './style/Reasons.module.scss'

export default function Star({ count }: Props) {
    const stars = []
    for (let i = 1; i <= 10; i += 1) {
        const isEven = i % 2 === 0
        const img = isEven ? right : left
        const cls = i <= count ? styles.red : styles.gray
        stars.push(
            <span className={cn(cls, styles.half)} key={i}>
                {img}
            </span>,
        )
    }
    return <div className={styles.star}>{stars}</div>
}
export { Star }

type Props = {
    count: number
}

const left = (
    <svg
        className={styles['svg-star']}
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 0.0303712L9.98931 0L7.6282 6.87402H0L6.17521 11.126L3.8141 18L9.98931 13.748L10 13.7582V0.0303712Z"
            fill="currentColor"
        />
    </svg>
)
const right = (
    <svg
        className={styles['svg-star']}
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.01861e-07 0.0303712L0.0106865 0L2.3718 6.87402H10L3.82479 11.126L6.1859 18L0.0106865 13.748L5.01861e-07 13.7582V0.0303712Z"
            fill="currentColor"
        />
    </svg>
)
