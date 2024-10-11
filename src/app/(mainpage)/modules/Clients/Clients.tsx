import Module from '@containers/Module'
import Image from '@/ui/Image'

import styles from './styles/Clients.module.scss'

import clients from './data/clients.json'

export default function Clients() {
    return (
        <Module className={styles['wrapper']}>
            <h2 className={styles.text}>
                Мы заслужили доверие более 100 компаний, 75% из них стали нашими постоянными
                клиентами
            </h2>
            <div className={styles.list}>
                {clients.map((client, i) => (
                    <div key={i + client.img} className={styles['img-box']}>
                        <Image src={client.img} alt={client.img} className={styles.img} />
                    </div>
                ))}
            </div>
        </Module>
    )
}
export { Clients }
