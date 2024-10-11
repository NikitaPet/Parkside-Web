'use client'

import { useState } from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import Module from '@containers/Module'
import Text from '@/ui/Text'
import Title from '@/ui/Title'
import Image from '@/ui/Image'

import Slide from './Slide'
import Navigation from './Navigation'
import Footer from './Footer'

import styles from './style/Reasons.module.scss'

import slides from './data/slides.json'

export default function Reasons() {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Почему нас выбирают</Title>
                <Text>
                    Клиенты отмечают наше внимание к деталям, вовлеченность в процесс и легкость в
                    общении
                </Text>
            </div>

            <div className={styles.content}>
                <div
                    className={cn(styles.container, {
                        [styles.expanded]: isExpanded,
                    })}
                >
                    <Swiper
                        autoHeight
                        pagination={{ type: 'fraction', renderFraction }}
                        navigation
                        modules={[Pagination]}
                        loop={true}
                    >
                        {slides.map((slide, i) => (
                            <SwiperSlide key={i + slide.img}>
                                <Slide
                                    img={slide.img}
                                    person={slide.person}
                                    position={slide.position}
                                    price={slide.price}
                                    communication={slide.communication}
                                    expectations={slide.expectations}
                                    description={slide.description}
                                />
                            </SwiperSlide>
                        ))}

                        <Navigation />
                    </Swiper>

                    <div className={styles.shade} />
                    <div className={styles['arrow-box']} onClick={() => setExpanded(!isExpanded)}>
                        <Image
                            src={'/img/main/homepage/reasons/arrow-2.svg'}
                            alt="arrow"
                            className={styles['arrow']}
                        />
                    </div>
                </div>

                <Footer />
            </div>
        </Module>
    )
}
export { Reasons }

function renderFraction(currentClass, totalClass) {
    return (
        '<div class="' +
        styles.pagination +
        '"> — &nbsp <span class="' +
        currentClass +
        '"></span>' +
        `&nbsp из &nbsp` +
        '<span class="' +
        totalClass +
        '"></span> &nbsp — </div>'
    )
}
