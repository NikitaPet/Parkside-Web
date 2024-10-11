import Module from '@containers/Module'
import Title from '@/ui/Title'
import Text from '@/ui/Text'
import Service from './Service'

import styles from './styles/Services.module.scss'

import services from './data/services.json'

export default function Services() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Что предлагаем</Title>
                <Text>
                    {'Parkside — это внешний IT\u2011департамент.'}
                    <br />
                    {'Мы присоединяемся к вашей команде или работаем над проектом самостоятельно'}
                </Text>
            </div>

            <div className={styles.services}>
                {services.map((service, i) => (
                    <Service
                        img={service.img}
                        title={service.title}
                        url={service.url}
                        key={i + service.title}
                        description={service?.description}
                    />
                ))}
            </div>
        </Module>
    )
}
export { Services }
