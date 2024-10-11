'use client'

import { useState } from 'react'
import Link from 'next/link'
import Title from '@/ui/Title'
import Service from './Service'

import Analytics from '@layout/modules/Header/icons/special/services/Analytics'
import Design from '@layout/modules/Header/icons/special/services/Design'
import Laptop from '@layout/modules/Header/icons/special/services/Laptop'
import Support from '@layout/modules/Header/icons/special/services/Support'
import ArrowIcon from '@layout/modules/Header/icons/ArrowExtended'

import styles from './styles/ServicesMenu.module.scss'

import services from './data/services.json'

export default function ServicesMenu({ isOpen }) {
    const [isOnLinkHover, setOnLinkHover] = useState(false)
    const tabIndex = isOpen ? 0 : -1
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <Title className={styles.title}>Наша специализация</Title>

                <Link
                    href={'/services'}
                    tabIndex={tabIndex}
                    className={styles['layout-interaction-button']}
                    onMouseEnter={() => setOnLinkHover(true)}
                    onMouseLeave={() => setOnLinkHover(false)}
                >
                    <p className={styles.link}>Все услуги</p>
                    <div className={styles.arrow}>
                        <ArrowIcon isActive={isOnLinkHover} />
                    </div>
                </Link>
            </div>

            <div className={styles.services}>
                {services.map((service, i) => (
                    <Service
                        Icon={icons[service['img-name']]}
                        title={service.title}
                        url={service.url}
                        tabIndex={tabIndex}
                        key={service.title + i}
                    >
                        {service?.description?.map((point, j) => (
                            <p className={styles.point} key={service.title + j}>
                                {point}
                            </p>
                        ))}
                    </Service>
                ))}
            </div>
        </div>
    )
}
export { ServicesMenu }

export const icons = {
    laptop: Laptop,
    analytics: Analytics,
    design: Design,
    support: Support,
}
