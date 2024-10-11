'use client'

import cn from 'classnames'
import Module from '@containers/Module'
import { Title } from './components'

import styles from './styles/Hero.module.scss'

export default function Hero({ data }) {
    return (
        <Module className={cn(styles['wrapper'])}>
            <Title>{data?.name}</Title>
            <Slide info={data?.info} />
        </Module>
    )
}
export { Hero }

export function Slide({ info }) {
    return (
        <div className={styles.slide}>
            <div className={styles['slide-content']}>
                <div className={styles.heading}>
                    <h1 className={styles.salary}>{info?.salary}</h1>
                    <p className={styles.experience}>{info?.experience}</p>
                    <p className={styles.conditions}>{info?.conditions}</p>
                </div>
                <p className={styles.description}>{info?.description}</p>
            </div>
        </div>
    )
}
