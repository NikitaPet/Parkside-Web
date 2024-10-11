import Module from '@containers/Module'
import Title from '@/ui/Title'

import { BridgeSVG } from './SVGs'

import styles from './styles/Explanation.module.scss'

export default function Explanation() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Как это работает</Title>
            </div>

            <div className={styles.content}>
                <div className={styles['cards-list']}>
                    <Card number={1}>
                        <p>
                            Подписываем договор, где определяем контакты связи, номер счета для
                            перечисления комиссии и персональный код партнера. По этому коду мы
                            будем отслеживать клиентов, которые придут к нам по рекомендации
                            партнера.
                        </p>
                    </Card>
                    <Card number={2}>
                        <p>
                            Партнер рекомендует нас своим коллегам и знакомым, пишет на форумах,
                            делает рассылку по своей клиентской базе. Он может самостоятельно
                            убедить клиента в сотрудничестве с нами, рассказав о наших услугах и
                            ценах, или просто передать клиенту нашу визитку, чтобы он сам связался с
                            нами.
                        </p>
                    </Card>
                    <Card number={3}>
                        <p>
                            Партнер отправляет к нам клиента, передав ему свой персональный код,
                            высылает нам контакты клиента или организовывает личную встречу. Мы
                            закрепляем клиента за партнером и прописываем его код в клиентской
                            договоре. Это означает, что за все заказы этого клиента партнер будет
                            получать комиссию.
                        </p>
                    </Card>
                    <Card number={4}>
                        <p>
                            Сообщаем партнеру о каждом этапе работы над проектом клиента и
                            просчитываем сумму вознаграждения от стоимости проекта<span>*</span>, на
                            которую может рассчитывать партнер.
                        </p>
                        <p className={styles.postscript}>
                            <span>*</span> Стоимость проекта может менять в большую или меньшую
                            стороны и влиять на величину вознаграждения партнера.
                        </p>
                    </Card>
                    <Card number={5}>
                        <p>
                            Выплачиваем комиссию партнера сразу после получения оплаты от клиента по
                            реквизитам, указанным в договоре.
                        </p>
                    </Card>
                </div>
            </div>
        </Module>
    )
}
export { Explanation }

export function Card({ number, children }) {
    return (
        <div className={styles['card']}>
            <h3 className={styles['num']}>{number}</h3>
            <div className={styles['card-text']}>{children}</div>
            <div className={styles['bridge-svg']}>
                <BridgeSVG />
            </div>
        </div>
    )
}
