'use client'

import React from 'react'
import Image from '@/ui/Image'

import Star from './Star'

import styles from './style/Reasons.module.scss'

export default function Slide({
    expectations,
    person,
    communication,
    price,
    position,
    description,
    img,
}: Props) {
    return (
        <div className={styles.slide}>
            <div className={styles['author-box']}>
                <Image src={img} alt={img} className={styles.img} />

                <div className={styles.author}>
                    <p>
                        {person} <br />
                        {position} <br />
                    </p>

                    <p className={styles['customer-evaluation']}>Оценка клиента:</p>

                    <div className={styles.stars}>
                        <div className={styles.caption}>
                            <p>Цена</p>
                            <Star count={price} />
                        </div>

                        <div className={styles.caption}>
                            <p>
                                Соответствие <br />
                                ожиданиям
                            </p>
                            <Star count={expectations} />
                        </div>

                        <div className={styles.caption}>
                            <p>Коммуникация</p>
                            <Star count={communication} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.data}>
                {description?.map((point, j) => (
                    <p className={styles.point} key={j + point[0]}>
                        {point}
                        <br />
                        <br />
                    </p>
                ))}
            </div>
        </div>
    )
}
export { Slide }

type Props = {
    img: string
    person: string
    position: string
    price: number
    communication: number
    expectations: number
    description: string[]
}
