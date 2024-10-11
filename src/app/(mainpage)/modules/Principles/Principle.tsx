import React from 'react'

import Image from '@/ui/Image'

import styles from './styles/Principles.module.scss'

export default function Principle({ img, title, children }: Props) {
    return (
        <div className={styles.principle}>
            <div className={styles['title-box']}>
                <Image src={img} alt="principle" className={styles.img} objectFit="cover" />
                <h2 className={styles.title}>{title}</h2>
            </div>

            <p className={styles.description}>{children}</p>
        </div>
    )
}
export { Principle }

type Props = {
    title: React.ReactNode
    children: React.ReactNode
    img: string
}
