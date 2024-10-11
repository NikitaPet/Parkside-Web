import React from 'react'
import Link from 'next/link'

import Image from '@/ui/Image'

import styles from './styles/Services.module.scss'

export default function Service({ img, title, url, description }: Props) {
    return (
        <Link href={url} className={styles.service}>
            <div className={styles['title-box']}>
                <Image src={img} alt={title} className={styles['img']} />
                <h3 className={styles.title}>{title}</h3>
            </div>

            <div className={styles.points}>
                {description?.map((point, j) => (
                    <p className={styles.point} key={j + point}>
                        {point}
                    </p>
                ))}
            </div>

            <Arrow />
        </Link>
    )
}
export { Service }

export function Arrow() {
    return (
        <Image
            src={'/img/main/homepage/services/arrow.svg'}
            alt={'arrow'}
            className={styles.arrow}
        />
    )
}

type Props = {
    title: string
    url: string
    img: string
    description: string[]
    // children: React.ReactNode
}
