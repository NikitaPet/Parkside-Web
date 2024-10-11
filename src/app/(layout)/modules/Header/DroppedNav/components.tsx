'use client'

import { useEffect, useState, useCallback } from 'react'
import { Fragment } from 'react'
import Link from 'next/link'
import cn from 'classnames'

// import Image from '@/ui/Image'
import MenuIcon from '@layout/modules/Header/icons/special/Menu'
import LogoIcon from '@layout/modules/Header/icons/special/Logo'
import PhoneIcon from '@layout/modules/Header/icons/special/Phone'

import DroppedWindow from './DroppedWindow'

import styles from './styles/DroppedNav.module.scss'

export function Logo() {
    return (
        <div className={styles['logo']}>
            <Link href="/" className={styles['logo-link']}>
                <LogoIcon className={styles['logo-icon']} />
                {/* <Image
                    src="/img/header/logo-small.svg"
                    alt="Логотип"
                    className={styles['logo-icon']}
                /> */}
            </Link>
        </div>
    )
}

export function Phone({ tel }: { tel: string }) {
    return (
        <div className={styles['phone']}>
            <a href={'tel:' + tel} className={styles['phone-link']}>
                <PhoneIcon className={styles.icon} />
                {/* <Image src="/img/header/phone.svg" alt="Телефон" className={styles.icon} /> */}
            </a>
        </div>
    )
}

export function Menu({ onClick, isSticky = false, isActive, closeDropDownWindow }) {
    const [isVisibleStaticMenu, setIsVisibleStaticMenu] = useState(true)

    const minVisibleStaticListTop = 0
    const handleScrollEvent = useCallback(() => {
        setIsVisibleStaticMenu(window.scrollY <= minVisibleStaticListTop)
    }, [])

    useEffect(() => {
        if (!window) return
        handleScrollEvent()
        window.addEventListener('scroll', handleScrollEvent)
        return () => window.removeEventListener('scroll', handleScrollEvent)
    })

    return (
        <Fragment>
            <div
                className={cn(styles.menu, {
                    [styles.sticky]: isSticky,
                    [styles.static]: isVisibleStaticMenu,
                })}
            >
                <button className={styles['menu-button']} onClick={onClick}>
                    <MenuIcon className={styles.icon} />
                    {/* <Image src={`/img/header/menu.svg`} alt="Menu" className={styles.icon} /> */}
                </button>
            </div>

            <DroppedWindow {...{ isActive, closeDropDownWindow }} />
        </Fragment>
    )
}
