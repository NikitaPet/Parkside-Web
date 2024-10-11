import Icon from '@layout/modules/Footer/icons/specials/YCPartner'
import Portals from '@layout/modules/Footer/common/Portals'

import styles from './styles/Partners.module.scss'

export default function Partners() {
    return (
        <div className={styles['partners']}>
            <div className={styles['partner']}>
                <h3 className={styles.title}>Официальный партнер</h3>
                <Icon className={styles['cloud']} />
            </div>

            <div className={styles['portals']}>
                <Portals />
            </div>
        </div>
    )
}
export { Partners }
