import React from 'react'

import Button from '@/ui/Button'
import useRedirect from '@global-hooks/useRedirect'

import styles from './style/Reasons.module.scss'

export default function Footer() {
    const redirect = useRedirect()

    return (
        <div className={styles['footer-box']}>
            <div
                className={styles['footer']}
                style={{ backgroundImage: `url(${'/img/main/homepage/reasons/footer-bg.jpg'})` }}
            >
                <p className={styles['text']}>
                    Живые истории сотрудничества с нашими клиентами. Рассказываем как оно есть на
                    самом деле
                </p>
                <Button className={styles['button']} onClick={() => redirect('/reviews')}>
                    Посмотреть видеоотзывы
                </Button>
            </div>
        </div>
    )
}
export { Footer }
