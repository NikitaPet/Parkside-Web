import Module from '@containers/Module'

import styles from './styles/Description.module.scss'

export default function Clients() {
    return (
        <Module className={styles['wrapper']}>
            <p className={styles.text}>
                Parkside – компания, выросшая из сообщества единомышленников – дизайнеров и
                разработчиков. Мы работаем как внешний IT-департамент: занимаемся разработкой сайтов
                и приложений с нуля или подключаемся к команде заказчика, беря на себя часть задач
                IT-отдела.
            </p>
            <p className={styles.text}>
                Наша цель – помочь бизнесу развиваться и изменять жизнь людей к лучшему. Среди наших
                проектов – сервис для велосипедистов, службы доставки еды, медийная площадка для НКО
                и многое другое.
            </p>
        </Module>
    )
}
export { Clients }
