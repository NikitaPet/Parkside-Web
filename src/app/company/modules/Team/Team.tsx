'use client'

import { useState } from 'react'
import cn from 'classnames'

import Module from '@containers/Module'
import Title from '@/ui/Title'
import Image from '@/ui/Image'

import styles from './styles/Team.module.scss'

import data from './data/data.json'

export default function Services() {
    const [departmentNum, setDepartmentNum] = useState(1)

    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Наша команда</Title>
            </div>

            <div className={styles.content}>
                <div className={styles.departments}>
                    {data.map((departmentData, i) => (
                        <p
                            className={cn(styles.department, {
                                [styles.active]: departmentNum === i + 1,
                            })}
                            onClick={() => setDepartmentNum(i + 1)}
                            key={i + departmentData?.name}
                        >
                            {departmentData?.name}
                        </p>
                    ))}
                </div>

                <Stack data={data[departmentNum - 1]?.['stack']} />
            </div>
        </Module>
    )
}
export { Services }

export function Stack({ data = [] }) {
    return (
        <div className={styles.stack}>
            {data?.map((stackData, i) => (
                <Image
                    src={stackData?.img}
                    alt={stackData?.img}
                    className={styles['stack-img']}
                    key={i + stackData?.img}
                />
            ))}
        </div>
    )
}
