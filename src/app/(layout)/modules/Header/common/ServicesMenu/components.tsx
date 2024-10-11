'use client'

import { type Dispatch, type SetStateAction } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './styles/ServicesMenu.module.scss'

export function NavLink({ children, href }) {
    return (
        <li className={styles.item}>
            <div className={styles['title-box']}>
                <NavTitle>
                    <Link href={href}>{children}</Link>
                </NavTitle>
            </div>
        </li>
    )
}

export function NavTitle({ children, isOpen = false }) {
    return (
        <div
            className={cn(styles['title'], {
                [styles['active']]: isOpen,
            })}
        >
            <p className={styles['title-text']}>{children}</p>
            <div className={styles['title-line']} />
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
}
