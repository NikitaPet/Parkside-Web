'use client'

import Button from '@ui/Button'

import styles from './styles/Details.module.scss'

export function CustomButton({ children }) {
    return (
        <div className={styles['button-box']}>
            <Button className={styles.button} onClick={() => {}}>
                {children}
            </Button>
        </div>
    )
}
export { CustomButton as Button }
