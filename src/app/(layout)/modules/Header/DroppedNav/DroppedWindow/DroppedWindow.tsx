'use client'

import { useEffect, useState } from 'react'
import { createContext } from 'react'
import { type Dispatch, SetStateAction } from 'react'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import useRedirect from '@global-hooks/useRedirect'
import AboutCoMenu from '@layout/modules/Header/common/AboutCoMenu'
import ServicesMenu from '@layout/modules/Header/common/ServicesMenu'
import { NavLink, NavMenu, NavMenuProps } from './components'
import { Close, Logo } from './components'

import styles from './styles/DroppedWindow.module.scss'

export default function DroppedWindow({ isActive, closeDropDownWindow }) {
    const redirect = useRedirect()
    const path = usePathname()

    const [activeNavMenu, setActiveNavMenu] = useState<NavMenuProps['navMenuName']>(null)
    const [fullPath, setFullPath] = useState<string>(path)

    const updateFullPath = () => {
        const currentLoc = window?.location
        const currentHref = currentLoc?.href
        if (currentHref !== fullPath) setFullPath(currentHref)
    }

    const scrollToAnchor = (fullPath: string) => {
        const currentLoc = window?.location
        const currentHash = currentLoc?.hash
        if (currentHash) redirect(fullPath)
    }

    useEffect(() => {
        closeDropDownWindow()
    }, [path])

    useEffect(() => {
        if (!isActive) setActiveNavMenu(null)
        if (!isActive) setTimeout(() => updateFullPath())
    }, [isActive])

    useEffect(() => {
        scrollToAnchor(fullPath)
    }, [fullPath])

    // const handleClick = () => setTimeout(() => updateFullPath())
    // useEffect(() => {
    //     window.addEventListener('click', handleClick)
    //     return () => window.removeEventListener('click', handleClick)
    // })

    return (
        <DroppedWindowContext.Provider
            value={{ isWindowActive: isActive, activeNavMenu, setActiveNavMenu }}
        >
            <div className={cn(styles.wrapper, { [styles.inactive]: !isActive })}>
                <WindowHeader {...{ closeDropDownWindow }} />
                <WindowNav />
            </div>
        </DroppedWindowContext.Provider>
    )
}
export { DroppedWindow }

export function WindowHeader({ closeDropDownWindow }) {
    return (
        <div className={styles['window-header']}>
            <Close onClick={() => closeDropDownWindow()} />
            <Logo />
        </div>
    )
}

export function WindowNav() {
    return (
        <div className={styles.nav}>
            <div className={styles.list}>
                <NavLink href="/projects">Портфолио</NavLink>
                <NavLink href="/products">Продукты</NavLink>
                <NavLink href="/blog">Статьи</NavLink>

                <NavMenu Content={ServicesMenu} navMenuName="services">
                    Услуги
                </NavMenu>

                <NavMenu Content={AboutCoMenu} navMenuName="company">
                    О компании
                </NavMenu>
            </div>
        </div>
    )
}

export const droppedWindowTransitionDurationMS = styles['dropped-window-transition-duration-ms']

export const DroppedWindowContext = createContext<DroppedWindowContextType>({
    isWindowActive: false,
    activeNavMenu: null,
    setActiveNavMenu: () => {},
})

type DroppedWindowContextType = {
    isWindowActive: false
    activeNavMenu: string
    setActiveNavMenu: Dispatch<SetStateAction<string>>
}
