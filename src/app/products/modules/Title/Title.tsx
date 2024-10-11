import Module from '@containers/Module'
import Image from '@/ui/Image'

import styles from './styles/Title.module.scss'

export default function Title() {
    return (
        <Module className={styles['wrapper']}>
            <Image
                src="/img/main/products/title/product-logo.svg"
                alt="logo"
                className={styles['logo']}
            />
            <h3 className={styles.title}>Pandan.Kit</h3>
            <p className={styles.text}>
                Собрали собственную библиотеку компонентов и иконок для создания макетов и
                интерактивных прототипов
            </p>
        </Module>
    )
}
export { Title }
