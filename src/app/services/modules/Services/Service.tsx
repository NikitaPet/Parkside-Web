import React from 'react'

import Image from '@/ui/Image'

import styles from './styles/Services.module.scss'

export default function Service({ img, title, points, description }: Props) {
    return (
        <div className={styles.service}>
            <Image src={img} alt={title} className={styles['img']} />
           
            <div className={styles['text-box']}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.points}>
                    {points?.map((point, j) => (
                        <p className={styles.point} key={j + point}>
                            {point}
                        </p>
                    ))}
                </div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
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
    img: string
    points: string[]
    description: string
}
