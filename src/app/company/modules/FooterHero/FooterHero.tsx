import cn from 'classnames'
import Module from '@containers/Module'

import styles from './styles/Hero.module.scss'

import data from './data/data.json'

export default function FooterHero() {
    return (
        <Module className={cn(styles['wrapper'])}>
            <div className={styles['content']}>
                <Slide title={data.title} text={data.text} img={data.img} />
            </div>
        </Module>
    )
}
export { FooterHero }

export function Slide({ img, text, title }: Props) {
    const style = { backgroundImage: `url(${img})` }
    return (
        <div className={styles.slide} style={style}>
            <div className={styles['slide-content']}>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </div>

            <div className={styles.shade} />
        </div>
    )
}

export function Title({ children }) {
    return <h1 className={styles.title}>{children}</h1>
}

export function Text({ children }) {
    return <p className={styles.text}>{children}</p>
}

type Props = {
    title: string
    text: string
    img: string
}
