'use client'

import { useState } from 'react'
import cn from 'classnames'
import Image from '@/ui/Image'
import Popup from './Popup'

import styles from './styles/Copyright.module.scss'

export default function Copyright() {
    const [isActive, setActive] = useState(false)

    const [mouseLeaveTimoutId, setMouseLeaveTimoutId] = useState(null)
    const leaveTimeSec = 0.5

    const date = new Date()
    const year = date.getFullYear()

    const leaveTimeMS = leaveTimeSec * 1000
    const openWindow = () => {
        if (mouseLeaveTimoutId) clearTimeout(mouseLeaveTimoutId)
        setActive(true)
    }
    const closeWindow = () => {
        const newMouseLeaveTimoutId = setTimeout(() => setActive(false), leaveTimeMS)
        setMouseLeaveTimoutId(newMouseLeaveTimoutId)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles['copyright-text']}>
                <p>© Parkside, 2015-{year} г. Все права защищены.</p>
            </div>

            <div className={styles.countries} onMouseLeave={() => closeWindow()}>
                <div className={cn(styles.country)} onMouseEnter={() => openWindow()}>
                    <FlagButton onClick={() => (isActive ? closeWindow() : openWindow())}>
                        <Image
                            src="/img/footer/flag.svg"
                            alt="n/a-flag"
                            className={styles['flag-icon']}
                        />
                        <p className={styles['country-name']}>Other countries</p>
                    </FlagButton>

                    <Popup {...{ isActive, setActive }} />
                </div>

                <div className={cn(styles.country)} onMouseEnter={() => openWindow()}>
                    <FlagButton onClick={() => (isActive ? closeWindow() : openWindow())}>
                        <Image
                            src="/img/footer/ru.svg"
                            alt="ru-flag"
                            className={styles['flag-icon']}
                        />
                        <p className={cn(styles['country-name'], styles.selected)}>Россия</p>
                    </FlagButton>
                </div>
            </div>
        </div>
    )
}
export { Copyright }

export function FlagButton({ children, onClick }) {
    return (
        <button className={styles['flag']} onClick={onClick}>
            {children}
        </button>
    )
}
