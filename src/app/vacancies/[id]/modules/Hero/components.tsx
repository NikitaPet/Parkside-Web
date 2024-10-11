'use client'

import Button from '@ui/Button'
import Title from '@ui/Title'
import useRedirect from '@global-hooks/useRedirect'
import Arrow from './icons/ArrowExtended'

import styles from './styles/Hero.module.scss'

export function CustomTitle({ children }) {
    const redirect = useRedirect()
    return (
        <div className={styles['title']}>
            <Button className={styles.button} onClick={() => redirect('/vacancies')}>
                <Arrow className={styles.arrow} />
            </Button>
            <Title className={styles['title-text']}>{children}</Title>
        </div>
    )
}
export { CustomTitle as Title }
