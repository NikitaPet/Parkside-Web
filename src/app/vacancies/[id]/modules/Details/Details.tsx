import Module from '@containers/Module'
import { Button } from './components'

import styles from './styles/Details.module.scss'

export default function Details({ data }) {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles['sections']}>
                {data?.info?.details?.map((data, i) => (
                    <Section data={data} key={i + data?.title} />
                ))}
            </div>
            <Button>Откликнуться</Button>
        </Module>
    )
}
export { Details }

export function Section({ data }) {
    return (
        <div className={styles['section']}>
            <h3 className={styles['section-title']}>{`${data?.title}:`}</h3>
            <ul className={styles['text-list']}>
                {data?.points?.map((point, i) => (
                    <li className={styles.point} key={i + point}>
                        <p className={styles.text}>{point}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
