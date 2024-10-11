import cn from 'classnames'
import Module from '@containers/Module'
import Button from '@/ui/Button'

import styles from './styles/Hero.module.scss'

import data from './data/service.json'

export default function Hero({ className = '' }) {
    const title = data.title
    const text = data.text
    const button = data.button
    const img = data.img

    const style = { backgroundImage: `url(${img})` }

    return (
        <Module className={cn(styles['wrapper'], { [className]: className })}>
            <div className={styles['content']}>
                <div className={styles.slide} style={style}>
                    <div className={styles['slide-content']}>
                        <h1 className={styles.title}>{title}</h1>

                        <div className={styles['text-box']}>
                            <p className={styles.text}>{text?.textN1}</p>
                            <ul>
                                {text?.points.map((point, i) => (
                                    <li className={styles.point} key={i + point}>
                                        <p className={styles.text}>{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles['text-box']}>
                            <p className={styles['text-conticle']}>{text?.textN2}</p>
                        </div>

                        {button && <Button className={styles.button}>{button}</Button>}
                    </div>

                    <div className={styles.shade} />
                </div>
            </div>
        </Module>
    )
}
export { Hero }
