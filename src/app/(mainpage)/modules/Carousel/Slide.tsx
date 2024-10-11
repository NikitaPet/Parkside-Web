import Button from '@/ui/Button'

import styles from './styles/Carousel.module.scss'

export default function Slide({ img, text, title, button, isActiveSlide, link }: Props) {
    const style = { backgroundImage: `url(${img})` }
    const tabIndex = isActiveSlide ? 0 : -1
    return (
        <div className={styles.slide} style={style}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
            <Button
                className={styles.button}
                tabIndex={tabIndex}
                onClick={() => {
                    if (link) window.open(link, '_blank')
                }}
            >
                {button}
            </Button>
        </div>
    )
}
export { Slide }

type Props = {
    img: string
    text: string
    title: string
    button: string
    isActiveSlide: boolean
    link?: string
}
