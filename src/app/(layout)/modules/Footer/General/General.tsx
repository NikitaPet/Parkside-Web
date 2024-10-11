import LogoIcon from '@layout/modules/Footer/icons/specials/ParksideIcon'
import Portals from '@layout/modules/Footer/common/Portals'
import ExpandedNav from './ExpandedNav'
import CompactNav from './CompactNav'

import styles from './styles/General.module.scss'

export default function General() {
    return (
        <div className={styles['general']}>
            <LogoBlock />
            <PortalsBlock />
            <Nav />
        </div>
    )
}
export { General }

export function LogoBlock() {
    return (
        <div className={styles.block}>
            <h3 className={styles.title}>С нами надежно</h3>

            <div className={styles['logo-box']}>
                <LogoIcon className={styles.logo} />
                {/* <Image src="/img/footer/logo.svg" alt="Logo" className={styles.logo} /> */}
                <p className={styles.text}>
                    {
                        'Обеспечиваем полный цикл разработки и сопровождение IT\u2011проектов, помогаем бизнесу развивать и укреплять свои позиции на рынке.'
                    }
                </p>
            </div>
        </div>
    )
}

export function PortalsBlock() {
    return (
        <div className={styles['portals']}>
            <Portals />
        </div>
    )
}

export function Nav() {
    return (
        <div className={styles['nav']}>
            <ExpandedNav />
            <CompactNav />
        </div>
    )
}
