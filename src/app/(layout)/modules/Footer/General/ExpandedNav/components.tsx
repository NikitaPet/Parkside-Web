import * as Blocks from '@layout/modules/Footer/General/common/blocks'

import styles from './styles/ExpandedNav.module.scss'

export const { Menu, Services, Contacts, Clients } = Blocks

export function Block({ title, Content }) {
    return (
        <div className={styles.block}>
            <Title>{title}</Title>
            <Content />
        </div>
    )
}

export function Title({ children }) {
    return <h3 className={styles.title}>{children}</h3>
}
