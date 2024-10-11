'use client'

import cn from 'classnames'
import { useSwiper } from 'swiper/react'

import Image from '@/ui/Image'

import styles from './styles/Navigation.module.scss'

export default function Navigation({ slides, slide, loader, progressContent }) {
    return (
        <div className={styles.wrapper}>
            <SlimNavigation {...{ slides, slide }} />
            <WideNavigation {...{ slides, slide, loader, progressContent }} />
        </div>
    )
}
export { Navigation }

export function WideNavigation({ slides, slide, loader, progressContent }) {
    const swiper = useSwiper()
    const slideTo = (newSlide: number) => swiper?.slideToLoop(newSlide)
    return (
        <div className={styles['wide-nav']}>
            <div className={styles.navs}>
                {slides.map((slideData, i) => (
                    <button
                        className={cn(
                            styles.nav,
                            { [styles.active]: slide === i },
                            styles['interaction-nav-button'],
                        )}
                        onClick={() => slideTo(i)}
                        key={i}
                    >
                        {slideData.nav}
                    </button>
                ))}
            </div>

            <Loader {...{ loader, progressContent }} />
        </div>
    )
}

export function SlimNavigation({ slides, slide }) {
    const swiper = useSwiper()
    const slideData = slides[slide]
    return (
        <div className={styles['slim-nav']}>
            <div className={styles.navs}>
                <Arrow onClick={() => swiper.slidePrev()} isReverse={true} />
                <p className={cn(styles.nav, styles.active)}>{slideData.nav}</p>
                <Arrow onClick={() => swiper.slideNext()} />
            </div>
        </div>
    )
}

export function Loader({ loader, progressContent }) {
    const r = progressCircleLength / (2 * Math.PI)
    const size = Math.ceil(2 * r * 1.2)
    const center = size / 2
    const viewBox = `0 0 ${size} ${size}`

    return (
        <div className={styles.loader}>
            <svg viewBox={viewBox} ref={loader}>
                <circle cx={center} cy={center} r={r}></circle>
            </svg>
            <span ref={progressContent}></span>
        </div>
    )
}

export function Arrow({ isReverse = false, onClick }) {
    return (
        <button
            className={cn(
                styles.arrow,
                { [styles.reverse]: isReverse },
                styles['interaction-nav-button'],
            )}
            onClick={onClick}
        >
            <Image src={'/img/main/homepage/carousel/arrow.svg'} alt={'arrow'} />
        </button>
    )
}

export const progressCircleLength = Number(styles['progress-circle-length'])
