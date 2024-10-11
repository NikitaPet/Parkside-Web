import React from 'react'
import Module from '@containers/Module'
import FixedNav from './FixedNav'
import DroppedNav from './DroppedNav'

import styles from './styles/Header.module.scss'

export default function Header() {
    return (
        <Module className={styles.wrapper}>
            <FixedNav />
            <DroppedNav />
        </Module>
    )
}
export { Header }
