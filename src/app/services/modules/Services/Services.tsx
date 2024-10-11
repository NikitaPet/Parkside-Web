import Module from '@containers/Module'
import Title from '@/ui/Title'
import Service from './Service'

import styles from './styles/Services.module.scss'

export default function Services({ title, data, id }: Props) {
    const services = data
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info} id={id}>
                <Title>{title}</Title>
            </div>

            <div className={styles.services}>
                {services.map((service, i) => (
                    <Service
                        img={service.img}
                        title={service.title}
                        key={i + service.title}
                        points={service?.points}
                        description={service?.description}
                    />
                ))}
            </div>
        </Module>
    )
}
export { Services }

type Props = { title: string; data: any[]; id: string }
