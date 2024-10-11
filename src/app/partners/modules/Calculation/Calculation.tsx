import Module from '@containers/Module'
import Image from '@/ui/Image'
import Title from '@/ui/Title'
import { List, Point, Postscript } from './components'

import styles from './styles/Calculation.module.scss'

export default function Calculation() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Пересчитаем на деньги</Title>
            </div>

            <div className={styles.content}>
                <div className={styles['description']}>
                    Мы беремся как за большие и сложные милионные проекты, так и более бюджетные и
                    быстрые заказы: медийные площадки стоимостью от 1,5-2 миллионов рублей и простых
                    лендингов от 20 тысяч рублей. <br />
                    <br />
                    Привлекая новых клиентов, наши партнеры решают собственные задачи – оплачивают
                    кружки детям и покупают винтажный винил или закрывают ипотеку и бронируют
                    авиабилеты. В любом случае они зарабатывают. Давайте посчитаем сколько.
                </div>

                <div className={styles['cards-list']}>
                    <div className={styles['card']}>
                        <Image
                            src={'/img/main/partners/calculation/fast.svg'}
                            alt={'fast'}
                            className={styles['img']}
                        />
                        <div className={styles['card-text']}>
                            <div className={styles['title']}>
                                <h3>Быстрые заказы </h3>
                                <h3>на 50 000 рублей</h3>
                            </div>
                            <p>В среднем партнеры приносят 5 контактов в месяц.</p>
                            <List>
                                <Point>
                                    <p>Первый контракт </p>
                                    <p>
                                        с комиссией 3% =
                                        <b>
                                            7 500<span>*</span> рублей
                                        </b>
                                    </p>
                                </Point>
                                <Point>
                                    <p>Второй контракт</p>
                                    <p>
                                        с комиссией 5% = <b>12 500 рублей</b>
                                    </p>
                                </Point>
                                <Point>
                                    <p>Пятый контракт </p>
                                    <p>
                                        с комиссией 10% = <b>25 500 рублей</b>
                                    </p>
                                </Point>
                            </List>
                            <Postscript>
                                Партнер самостоятельно платит налог с суммы вознаграждения
                            </Postscript>
                        </div>
                    </div>

                    <div className={styles['card']}>
                        <Image
                            src={'/img/main/partners/calculation/big.svg'}
                            alt={'big'}
                            className={styles['img']}
                        />
                        <div className={styles['card-text']}>
                            <div className={styles['title']}>
                                <h3>Крупные заказы </h3>
                                <h3>на 1 500 000 рублей</h3>
                            </div>
                            <p>В среднем партнеры приносят 1 контакт в 3 месяца.</p>
                            <List>
                                <Point>
                                    <p>Первый контракт</p>
                                    <p>
                                        с комиссией 3% =
                                        <b>
                                            45 000<span>*</span> рублей
                                        </b>
                                    </p>
                                </Point>
                                <Point>
                                    <p>Шестой контракт</p>
                                    <p>
                                        с комиссией 5% =<b> 75 000 рублей</b>
                                    </p>
                                </Point>
                                <Point>
                                    <p>11-ый контракт</p>
                                    <p>
                                        с комиссией 7% = <b>150 000 рублей</b>
                                    </p>
                                </Point>
                            </List>

                            <Postscript>
                                Партнер самостоятельно платит налог с суммы вознаграждения
                            </Postscript>
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    )
}
export { Calculation }
