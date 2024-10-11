import Module from '@containers/Module'
import Text from '@/ui/Text'
import Title from '@/ui/Title'
import Principle from './Principle'

import styles from './styles/Principles.module.scss'

import principles from './data/principles.json'

export default function Principles() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Наши принципы</Title>
                <Text>
                    Работаем в тесном контакте с заказчиком, организуем командные мозговые штурмы,
                    занимаемся отчетными документами
                </Text>
            </div>

            <div className={styles.principles}>
                {principles.map((principle, i) => (
                    <Principle
                        img={principle.img}
                        title={principle.title}
                        key={i + principle.title}
                    >
                        {principle.description}
                    </Principle>
                ))}
            </div>
        </Module>
    )
}
export { Principles }
