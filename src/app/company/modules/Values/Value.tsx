import React from 'react'

import Image from '@/ui/Image'

import styles from './styles/Values.module.scss'

export default function Value({ img, title, children }: Props) {
    return (
        <div className={styles.value}>
            <Image src={img} alt={title} className={styles['img']} />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.description}>{children}</div>
        </div>
    )
}
export { Value }

type Props = {
    title: string
    img: string
    children: React.ReactNode
}
