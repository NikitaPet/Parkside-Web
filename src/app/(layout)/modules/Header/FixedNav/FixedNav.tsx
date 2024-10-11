'use client'

import { useEffect, useState, useCallback } from 'react'
import cn from 'classnames'

import AboutCoMenu from '@layout/modules/Header/common/AboutCoMenu'
import ServicesMenu from '@layout/modules/Header/common/ServicesMenu'
import { Logo, Phone, NavLink, NavMenu, NavMenuProps } from './components'

import styles from './styles/FixedNav.module.scss'

export default function FixedNav() {
    return (
        <div className={styles.wrapper}>
            <Logo />
            <NavList isSticky={true} />
            <Phone tel="+74951754254" />
        </div>
    )
}

function NavList({ isSticky = false }) {
    const [activeNavMenu, setActiveNavMenu] = useState<NavMenuName>(null)
    const [isVisibleStaticList, setIsVisibleStaticList] = useState(true)

    // const minVisibleStaticListTop = headerHeightPX
    const minVisibleStaticListTop = 0
    const handleScrollEvent = useCallback(() => {
        setIsVisibleStaticList(window.scrollY <= minVisibleStaticListTop)
    }, [])

    useEffect(() => {
        handleScrollEvent()
        window.addEventListener('scroll', handleScrollEvent)
        return () => window.removeEventListener('scroll', handleScrollEvent)
    }, [])

    useEffect(() => {
        const isNavEnable = isSticky ? !isVisibleStaticList : isVisibleStaticList
        if (!isNavEnable) setActiveNavMenu(null)
    }, [isVisibleStaticList])

    return (
        <div
            className={cn(styles.nav, {
                [styles.sticky]: isSticky,
                [styles.static]: isVisibleStaticList,
            })}
        >
            <div className={styles.list}>
                <NavLink href="/projects">Портфолио</NavLink>
                <NavLink href="/products">Продукты</NavLink>
                <NavLink href="/blog">Статьи</NavLink>

                <NavMenu
                    navMenuName="services"
                    Content={ServicesMenu}
                    isWideFormat={true}
                    {...{ activeNavMenu, setActiveNavMenu, isSticky, isVisibleStaticList }}
                >
                    Услуги
                </NavMenu>

                <NavMenu
                    navMenuName="company"
                    Content={AboutCoMenu}
                    isWideFormat={false}
                    {...{ activeNavMenu, setActiveNavMenu, isSticky, isVisibleStaticList }}
                >
                    О компании
                </NavMenu>
            </div>
        </div>
    )
}

export const headerHeightPX = Number(styles['header-height-px'])

type NavMenuName = NavMenuProps['navMenuName']
