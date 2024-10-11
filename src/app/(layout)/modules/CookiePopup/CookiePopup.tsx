'use client'

import { useState, useEffect } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import Module from '@containers/Module'
import Button from '@/ui/Button'
import sources from '@/global/files/sources'

import styles from './styles/CookiePopup.module.scss'

export default function CookiePopup({}) {
    const [isActive, setActive] = useState(false)

    useEffect(() => {
        setTimeout(() => setActive(true), 3000)
    }, [])

    return (
        <Module className={cn(styles.wrapper, { [styles.inactive]: !isActive })}>
            <div className={styles.window}>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Просим вас принять{' '}
                        <Link href={`/file/${sources.pdf.cookies}`}>
                            политику использования файлов cookies
                        </Link>
                        , чтобы этот сайт загружался быстрее и вам было проще связаться с нами.
                    </p>
                    <Button className={styles.button} onClick={() => setActive(false)}>
                        Принять
                    </Button>
                </div>
            </div>
        </Module>
    )
}
export { CookiePopup }
