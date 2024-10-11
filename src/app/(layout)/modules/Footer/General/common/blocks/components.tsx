import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { Context } from './blocks'

import styles from './styles/blocks.module.scss'

export function NavLink({ children, href }) {
    const { tabIndex } = useContext(Context)
    return (
        <Link
            href={href}
            className={cn(styles.link, styles['layout-interaction-button'])}
            tabIndex={tabIndex}
        >
            {children}
        </Link>
    )
}

export function ContactLink({ children, href }) {
    const { tabIndex } = useContext(Context)
    return (
        <a
            href={href}
            className={cn(styles.link, styles['layout-interaction-link'])}
            tabIndex={tabIndex}
        >
            {children}
        </a>
    )
}

export function SocialLink({ Icon, href }) {
    const { tabIndex } = useContext(Context)
    return (
        <a href={href} className={styles['img-link']} tabIndex={tabIndex}>
            <Icon className={styles['img']} />
        </a>
    )
}
