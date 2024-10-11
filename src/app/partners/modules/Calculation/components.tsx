import styles from './styles/Calculation.module.scss'

export function List({ children }) {
    return <div className={styles['card-list']}>{children}</div>
}

export function Point({ children }) {
    return <div className={styles['card-list-point']}>{children}</div>
}

export function Postscript({ children }) {
    return (
        <p className={styles.postscript}>
            <span>*</span> {children}
        </p>
    )
}
