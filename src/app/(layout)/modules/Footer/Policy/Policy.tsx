import cn from 'classnames'
import Link from 'next/link'

import sources from '@/global/files/sources'

import styles from './styles/Policy.module.scss'

export default function Policy() {
    return (
        <div className={styles.policy}>
            <div className={styles.list}>
                <ListLink href={`/file/${sources.pdf.agreement}`}>
                    Пользовательское соглашение
                </ListLink>

                <ListLink href={`/file/${sources.pdf.privacy}`}>
                    Политика конфиденциальности
                </ListLink>

                <ListLink href={`/file/${sources.pdf.cookies}`}>
                    Использование файлов cookies
                </ListLink>
            </div>
        </div>
    )
}
export { Policy }

export function ListLink({ children, href }) {
    return (
        <div className={cn(styles['link-box'])}>
            <Link href={href} className={cn(styles.link, styles['layout-interaction-button'])}>
                {children}
            </Link>
        </div>
    )
}
