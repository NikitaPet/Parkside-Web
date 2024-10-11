import Modules from '@containers/ModulesColumn'
import FileReader from './modules/FileReader'

import styles from './styles/page.module.scss'

export default function Page({ params }) {
    const { filename } = params
    return (
        <Modules className={styles.wrapper}>
            <FileReader {...{ filename }} />
        </Modules>
    )
}
