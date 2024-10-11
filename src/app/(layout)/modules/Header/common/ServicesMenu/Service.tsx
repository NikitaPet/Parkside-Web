import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
// import Image from '@/ui/Image'

import styles from './styles/ServicesMenu.module.scss'

export default function Service({ Icon, title, url, tabIndex, children }: Props) {
    const disabled = false
    return (
        <Link
            href={url}
            className={cn(styles.service, { [styles.disabled]: disabled })}
            tabIndex={tabIndex}
        >
            <Icon className={styles['img']} />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.points}>{children}</div>
        </Link>
    )
}
export { Service }

type Props = {
    title: string
    url: string
    img?: string
    Icon: ({ className }) => JSX.Element
    tabIndex: number
    children: React.ReactNode
}
