import React from 'react'
import Image from '@/ui/Image'

import styles from './styles/WorkWith.module.scss'

export default function Item({ img, children }: Props) {
    return (
        <div className={styles.item}>
            <Image src={img} alt="" className={styles.img} />
            <h3 className={styles.title}>{children}</h3>
        </div>
    )
}
export { Item }

type Props = {
    children: React.ReactNode
    img: string
}
