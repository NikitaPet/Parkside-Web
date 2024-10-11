import Module from '@containers/Module'
import Image from '@/ui/Image'
import Title from '@/ui/Title'

import styles from './styles/styles.module.scss'

import data from './data/data.json'

export default function WorkTogether() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Давайте работать и зарабатывать вместе</Title>
            </div>

            <div className={styles.content}>
                <div className={styles['cards-list']}>
                    {data?.map((cardData, i) => (
                        <div className={styles['card']} key={i + cardData.number}>
                            <div className={styles['num']}>{cardData.number}</div>
                            <div className={styles['card-text']}>{cardData.text}</div>
                            <Image
                                src={cardData.img}
                                alt={cardData.img}
                                className={styles['img']}
                            />
                        </div>
                    ))}
                </div>

                <p className={styles['description']}>
                    Мы сотрудничаем с рекламными и маркетинговыми агенствами, а также отдельными
                    исполнителями, готовыми рассказывать о нас своим коллегам, заказчикам и
                    знакомым. 75% наших клиентов возвращаются к нам с новыми проектами и приводят с
                    собой своих партнёров и друзей, зарабатывая на рекомендациях и отзывах о нашей
                    работе.
                </p>
            </div>
        </Module>
    )
}
export { WorkTogether }
