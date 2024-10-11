'use client'

import { useEffect, useState, useRef } from 'react'
import { type Dispatch, type SetStateAction } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import LogoIcon from '@layout/modules/Header/icons/special/LogoExtended'
import PhoneIcon from '@layout/modules/Header/icons/special/Phone'
import ArrowIcon from '@layout/modules/Header/icons/Arrow'
import useClickInside from '@/global/hooks/useClickInside'

import styles from './styles/FixedNav.module.scss'

export function Logo() {
    return (
        <div className={styles['logo']}>
            <Link href="/" className={styles['logo-link']}>
                <LogoIcon className={styles['logo-icon']} />
            </Link>
        </div>
    )
}

export function Phone({ tel }: { tel: string }) {
    return (
        <div className={styles['phone']}>
            <a href={'tel:' + tel} className={styles['phone-link']}>
                <PhoneIcon className={styles.icon} />
                <div className={styles['number-box']}>
                    <p className={styles.number}>+7 495 175-42-54</p>
                    <p className={styles.info}>Для быстрой связи</p>
                </div>
            </a>
        </div>
    )
}

export function NavLink({ children, href }) {
    return (
        <div className={styles.item}>
            <Link href={href} className={styles['layout-interaction-button']}>
                <Title>{children}</Title>
            </Link>
        </div>
    )
}

export function NavMenu({
    children,
    Content,
    isWideFormat,
    navMenuName,
    activeNavMenu,
    setActiveNavMenu,
    isSticky = false,
    isVisibleStaticList = false,
}: NavMenuProps) {
    const [menuWindow, setMenuWindow] = useState<HTMLDivElement>(null)

    const isOpen = navMenuName === activeNavMenu
    const handleItemClick = () => setActiveNavMenu(!isOpen ? navMenuName : null)

    const handleOutsideClick = () => setActiveNavMenu(null)
    useClickInside(menuWindow, handleOutsideClick, { reverseMode: true })

    return (
        <div className={cn(styles.item, { [styles['slim-menu-format']]: !isWideFormat })}>
            <button
                className={styles['layout-interaction-button']}
                onClick={() => handleItemClick()}
            >
                <TitleArrow isOpen={isOpen}>{children}</TitleArrow>
            </button>

            <RollingBox {...{ isOpen, isWideFormat, setMenuWindow, isSticky, isVisibleStaticList }}>
                <Content isOpen={isOpen} />
            </RollingBox>
        </div>
    )
}

export function TitleArrow({ children, isOpen = false }) {
    return (
        <div className={cn(styles['title-arrow'], { [styles['active']]: isOpen })}>
            <Title>{children}</Title>
            <ArrowIcon className={styles['arrow']} isActive={isOpen} />
            {/* <Image src="/img/header/arrow.svg" className={styles['arrow']} alt="arrow" /> */}
        </div>
    )
}

export function Title({ children }) {
    return (
        <div className={cn(styles['title'])}>
            <p className={styles['title-text']}>{children}</p>
        </div>
    )
}

export function RollingBox({
    children,
    isOpen,
    isWideFormat,
    setMenuWindow,
    isSticky,
    isVisibleStaticList,
}) {
    const menuWindowRef = useRef<HTMLDivElement>(null)
    useEffect(() => setMenuWindow(menuWindowRef.current), [])
    return (
        <div
            className={cn(styles['rolling-box'], {
                [styles['active']]: isOpen,
                [styles['slim-menu-format']]: !isWideFormat,
                [styles.sticky]: isSticky,
                [styles.static]: isVisibleStaticList,
            })}
        >
            <div className={styles['rolling-sub-box']}>
                <div className={styles['content-box']} ref={menuWindowRef}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export type NavMenuProps = {
    children: React.ReactNode
    Content: ({ isOpen }) => JSX.Element
    navMenuName: string
    isWideFormat: boolean
    activeNavMenu: string | null
    setActiveNavMenu: Dispatch<SetStateAction<string>>
    isSticky: boolean
    isVisibleStaticList: boolean
}
