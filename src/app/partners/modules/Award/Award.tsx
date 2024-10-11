import Module from '@containers/Module'
import Title from '@/ui/Title'
import CardsList from './CardsList'

import styles from './styles/Award.module.scss'

export default function Award() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Какое вознаграждение получает партнер</Title>
            </div>

            <div className={styles.content}>
                <CardsList />
                <div className={styles['description']}>
                    Вы привлекаете клиентов, мы подписываем с ними договоры. Чем больше подписанных
                    договоров, тем больше ваша комиссия. Нам не важно, будут ли это разные клиенты,
                    или вы приведете одного заказчика, и он подпишет с нами несколько контрактов –
                    вы получите вознаграждение за каждую сделку.
                </div>
            </div>
        </Module>
    )
}
export { Award }
