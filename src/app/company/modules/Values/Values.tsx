import Module from '@containers/Module'
import Title from '@/ui/Title'
import Value from './Value'

import styles from './styles/Values.module.scss'

import values from './data/values.json'

export default function Values() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Наши ценности</Title>
            </div>

            <div className={styles.values}>
                {values.map((value, i) => (
                    <Value img={value?.img} title={value?.title} key={i + value?.title}>
                        {value?.description}
                    </Value>
                ))}
            </div>
        </Module>
    )
}
export { Values }
