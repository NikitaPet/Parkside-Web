import Module from '@containers/Module'

import General from './General'
import Partners from './Partners'
import Copyright from './Copyright'
import Policy from './Policy'

import styles from './styles/Footer.module.scss'

export default function Footer() {
    return (
        <Module className={styles.wrapper}>
            <div className={styles.points}>
                <General />
                <Partners />
                <Copyright />
                <Policy />
            </div>
        </Module>
    )
}
export { Footer }
