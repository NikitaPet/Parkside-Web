import React from 'react'

import Image from '@/ui/Image'

import styles from './styles/HowWeWork.module.scss'

export default function Item({ img, title, children }: Props) {
    return (
        <div className={styles.item}>
            <Image src={img} alt="" className={styles.img} objectFit="cover" />

            <div className={styles['title-box']}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{children}</p>
            </div>
        </div>
    )
}

type Props = {
    title: React.ReactNode
    children: React.ReactNode
    img: string
}
