import Module from '@containers/Module'
import Image from '@/ui/Image'
import Title from '@/ui/Title'

import styles from './styles/styles.module.scss'

import data from './data/data.json'

export default function Profit() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Почему это выгодно для партнера</Title>
            </div>

            <div className={styles.content}>
                <div className={styles['cards-list']}>
                    {data?.map((cardData, i) => (
                        <div className={styles['card']} key={i + cardData.text}>
                            <Image
                                src={cardData.img}
                                alt={cardData.img}
                                className={styles['img']}
                            />
                            <div className={styles['card-text']}>{cardData.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Module>
    )
}
export { Profit }
