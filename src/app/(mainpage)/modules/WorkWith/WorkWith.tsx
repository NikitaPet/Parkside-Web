import Module from '@containers/Module'
import Text from '@/ui/Text'
import Title from '@/ui/Title'
import Item from './Item'

import styles from './styles/WorkWith.module.scss'

import items from './data/items.json'

export default function WorkWith() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>С кем мы работаем</Title>
                <Text>
                    Предлагаем авторские решения для реализации проектов крупного, среднего и малого
                    бизнеса и госсектора
                </Text>
            </div>

            <div className={styles.items}>
                {items.map((item, i) => (
                    <Item img={item.img} key={i + item.title}>
                        {item.title}
                    </Item>
                ))}
            </div>
        </Module>
    )
}
export { WorkWith }
