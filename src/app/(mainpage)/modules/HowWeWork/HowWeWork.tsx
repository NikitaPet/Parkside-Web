import Module from '@containers/Module'
import Text from '@/ui/Text'
import Title from '@/ui/Title'
import Item from './Item'

import styles from './styles/HowWeWork.module.scss'

import items from './data/items.json'

export default function HowWeWork() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Как мы работаем</Title>
                <Text>
                    Берем на себя ответственность за качественную реализацию проекта и постоянно
                    находимся на связи с заказчиками
                </Text>
            </div>

            <div className={styles.items}>
                {items.map((item, i) => (
                    <Item img={item.img} title={item.title} key={i + item.title}>
                        {item.description}
                    </Item>
                ))}
            </div>
        </Module>
    )
}
export { HowWeWork }
