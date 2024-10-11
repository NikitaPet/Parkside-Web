'use client'

import { useContext } from 'react'
import cn from 'classnames'
import Link from 'next/link'

// import Image from '@/ui/Image'
import LogoIcon from '@layout/modules/Header/icons/special/Logo'
import ArrowIcon from '@layout/modules/Header/icons/Arrow'
import CloseIcon from '@layout/modules/Header/icons/Close'
import { DroppedWindowContext } from './DroppedWindow'

import styles from './styles/DroppedWindow.module.scss'

export function Logo() {
    return (
        <div className={styles['logo']}>
            <div className={styles['logo-box']}>
                <LogoIcon className={styles['logo-icon']} />
                {/* <Image
                    src="/img/header/logo-small.svg"
                    alt="Логотип"
                    className={styles['logo-icon']}
                /> */}
            </div>
        </div>
    )
}

export function Close({ onClick }) {
    const { isWindowActive } = useContext(DroppedWindowContext)
    const tabIndex = isWindowActive ? 0 : -1
    return (
        <button className={styles.close} onClick={onClick} tabIndex={tabIndex}>
            <CloseIcon className={styles.icon} />
            {/* <Image src={`/img/header/close.svg`} alt="Close" className={styles.icon} /> */}
        </button>
    )
}

export function NavLink({ children, href }) {
    const { isWindowActive } = useContext(DroppedWindowContext)
    const tabIndex = isWindowActive ? 0 : -1
    return (
        <div className={styles.item}>
            <div className={styles['item-row']}>
                <Link
                    href={href}
                    className={styles['layout-interaction-link-button']}
                    tabIndex={tabIndex}
                >
                    <Title>{children}</Title>
                </Link>
            </div>
        </div>
    )
}

export function NavMenu({ children, Content, navMenuName }: NavMenuProps) {
    const { activeNavMenu, setActiveNavMenu } = useContext(DroppedWindowContext)
    const isOpen = navMenuName === activeNavMenu
    const handleItemClick = () => setActiveNavMenu(!isOpen ? navMenuName : null)

    return (
        <div className={styles.item}>
            <div className={styles['item-row']}>
                <div
                    onClick={() => handleItemClick()}
                    className={styles['layout-interaction-menu-button']}
                >
                    <TitleArrow isOpen={isOpen}>{children}</TitleArrow>
                </div>
            </div>

            <RollingBox isOpen={isOpen}>
                <Content isOpen={isOpen} />
            </RollingBox>
        </div>
    )
}

export function TitleArrow({ children, isOpen = false }) {
    const { isWindowActive } = useContext(DroppedWindowContext)
    const tabIndex = isWindowActive ? 0 : -1
    return (
        <div className={cn(styles['title-arrow'], { [styles['active']]: isOpen })}>
            <Title>{children}</Title>
            <button tabIndex={tabIndex} className={styles['arrow-button']}>
                <ArrowIcon className={styles['arrow']} isActive={isOpen} />
                {/* <Image src="/img/header/arrow.svg" className={styles['arrow']} alt="arrow" /> */}
            </button>
        </div>
    )
}

export function Title({ children }) {
    return (
        <div className={styles['title']}>
            <p className={styles['title-text']}>{children}</p>
            <div className={styles['title-line']} />
        </div>
    )
}

export function RollingBox({ children, isOpen }) {
    return (
        <div className={cn(styles['rolling-box'], { [styles['active']]: isOpen })}>
            <div className={styles['content-box']}>{children}</div>
        </div>
    )
}

export type NavMenuProps = {
    children: React.ReactNode
    Content: ({ isOpen }) => JSX.Element
    navMenuName: string | null
}
