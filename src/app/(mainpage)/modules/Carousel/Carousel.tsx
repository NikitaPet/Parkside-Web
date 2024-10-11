'use client'

import { useRef, useState } from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import Module from '@containers/Module'
import Navigation from './Navigation'
import Slide from './Slide'

import styles from './styles/Carousel.module.scss'

import slides from './data/slides.json'

export default function Carousel() {
    const autoplayTiming = 6000

    const [slide, setSlide] = useState(0)
    const loader = useRef(null)
    const progressContent = useRef(null)

    const updateProgress = (progress) => {
        const loaderProgress = 1 - progress
        const loaderStyle = loader?.current?.style
        if (loaderStyle) loaderStyle.setProperty('--loader-progress', loaderProgress)
    }

    return (
        <Module className={styles['wrapper']}>
            <div className={styles['content']}>
                <Swiper
                    className={cn(styles.slider)}
                    centeredSlides={true}
                    autoplay={{ delay: autoplayTiming, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    onSlideChange={(swiper) => setSlide(swiper.realIndex)}
                    onAutoplayTimeLeft={(s, t, progress) => updateProgress(progress)}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                >
                    {slides.map((slideData, i) => (
                        <SwiperSlide key={i + slideData.title}>
                            <Slide
                                title={slideData.title}
                                text={slideData.text}
                                button={slideData.button}
                                img={slideData.img}
                                isActiveSlide={slide === i}
                                link={slideData.link}
                            />
                        </SwiperSlide>
                    ))}

                    <Navigation {...{ slides, slide, loader, progressContent }} />
                </Swiper>
            </div>
        </Module>
    )
}
export { Carousel }
