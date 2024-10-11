import { Menu, Services, Contacts, Clients } from './components'
import { Block } from './components'

import styles from './styles/ExpandedNav.module.scss'

export default function ExpandedNav() {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <Block title={'Меню'} Content={Menu} />
                <Block title={'Услуги'} Content={Services} />
                <Block title={'Контакты'} Content={Contacts} />
                <Block title={'Встречи с клиентами'} Content={Clients} />
            </ul>
        </div>
    )
}
export { ExpandedNav }
