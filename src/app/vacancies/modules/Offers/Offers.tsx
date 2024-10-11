import Link from 'next/link'
import cn from 'classnames'
import Image from '@/ui/Image'
import Module from '@containers/Module'

import styles from './styles/Offers.module.scss'

export default function Offers({ data }) {
    return (
        <Module className={cn(styles['wrapper'])}>
            <div className={styles['content']}>
                {data?.map((item, i) => <Offer data={item} key={i + data.id} />)}
            </div>
        </Module>
    )
}
export { Offers }

function Offer({ data }) {
    return (
        <Link href={`/vacancies/${data?.id}`} className={styles['link']}>
            <div className={styles['offer']}>
                <Image
                    src="/img/main/vacancies/offer-logo.svg"
                    alt="Логотип"
                    className={styles['logo-icon']}
                />

                <p className={styles['name']}>{data.name}</p>

                <div className={styles['description']}>
                    <p className={styles['description-text']}>{data.description}</p>
                </div>
            </div>
        </Link>
    )
}
