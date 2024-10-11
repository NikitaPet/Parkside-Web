'use client'

import { useContext } from 'react'
import cn from 'classnames'

import ArrowIcon from '@layout/modules/Footer/icons/Arrow'
import * as Blocks from '@layout/modules/Footer/General/common/blocks'
import { CompactNavContext } from './CompactNav'

import styles from './styles/CompactNav.module.scss'

export const { Menu, Services, Contacts, Clients } = Blocks

export function NavMenu({ children, Content, navMenuName }: NavMenuProps) {
    const { activeNavMenu, setActiveNavMenu } = useContext(CompactNavContext)
    const isOpen = navMenuName === activeNavMenu
    const handleItemClick = () => setActiveNavMenu(!isOpen ? navMenuName : null)

    return (
        <div className={styles.item}>
            <div
                onClick={() => handleItemClick()}
                className={styles['layout-interaction-menu-button']}
            >
                <TitleArrow isOpen={isOpen}>{children}</TitleArrow>
            </div>

            <RollingBox isOpen={isOpen}>
                <Content isOpen={isOpen} />
            </RollingBox>
        </div>
    )
}

export function TitleArrow({ children, isOpen = false }) {
    return (
        <div className={cn(styles['title-row'], { [styles['active']]: isOpen })}>
            <Title>{children}</Title>
            <button className={styles['arrow-button']}>
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
