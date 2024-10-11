'use client'

import React from 'react'
import cn from 'classnames'
import { useSwiper } from 'swiper/react'
import Image from '@/ui/Image'

import styles from './style/Reasons.module.scss'

export default function Navigation() {
    const swiper = useSwiper()
    return (
        <div className={styles.navigation} slot="container-end">
            <button className={styles.arrow} onClick={() => swiper?.slidePrev()}>
                <Image
                    src={'/img/main/homepage/reasons/arrow.svg'}
                    alt="arrow"
                    className={styles['arrow-img']}
                />
            </button>

            <button className={styles.arrow} onClick={() => swiper?.slideNext()}>
                <Image
                    src={'/img/main/homepage/reasons/arrow.svg'}
                    alt="arrow"
                    className={cn(styles['arrow-img'], styles.reverse)}
                />
            </button>
        </div>
    )
}
export { Navigation }
