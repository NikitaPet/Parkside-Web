import PortalIcon from '@layout/modules/Footer/icons/specials/PortalPartner'
import WorkspaceIcon from '@layout/modules/Footer/icons/specials/WorkspacePartner'

import styles from './styles/Portals.module.scss'

export default function Portals() {
    return (
        <div className={styles['portals-box']}>
            <h3 className={styles.title}>Нас можно найти</h3>
            <div className={styles.portals}>
                <a
                    href="https://zakupki.mos.ru/companyProfile/31848320"
                    className={styles['portals-link']}
                >
                    <PortalIcon className={styles['portal']} />
                    {/* <Image
                        src="/img/footer/portal.svg"
                        alt="portal-1"
                        className={styles['portal']}
                    /> */}
                </a>
                <a
                    href="https://workspace.ru/contractors/parkside-agency/"
                    className={styles['portals-link']}
                >
                    <WorkspaceIcon className={styles['portal']} />
                    {/* <Image
                        src="/img/footer/workspace.svg"
                        alt="portal-2"
                        className={styles['portal']}
                    /> */}
                </a>
            </div>
        </div>
    )
}
export { Portals }
