import Module from '@containers/Module'
import Title from '@/ui/Title'
import Achievement from './Achievement'

import styles from './styles/Achievements.module.scss'

export default function Achievements() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Parkside в цифрах</Title>
            </div>

            <div className={styles.achievements}>
                <Achievement title={'Лет на рынке'} value={year - 2015} />
                <Achievement title={'Сданных проектов'} value={'100+'} />
                <Achievement title={'Постоянных клиентов'} value={9} />
            </div>

            <p className={styles.text}>
                Стартовав в 2015 году, мы постоянно росли над собой, нарабатывали опыт,
                прокачивались как команда. Сейчас мы ведём технически сложные проекты, участвуем в
                запуске продуктов от Яндекса, Азбуки Вкуса и ЦОДД и не боимся новых интересных
                вызовов.
            </p>
        </Module>
    )
}
export { Achievements }
