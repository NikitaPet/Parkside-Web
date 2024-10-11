import Link from 'next/link'

import styles from './styles/AboutCoMenu.module.scss'

import points from './data/data.json'

export default function AboutCoMenu({ isOpen }) {
    const tabIndex = isOpen ? 0 : -1
    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {points.map((point, i) => (
                    <Point url={point.url} tabIndex={tabIndex} key={i + point.url}>
                        {point.name}
                    </Point>
                ))}
            </div>
        </div>
    )
}
export { AboutCoMenu }

function Point({ url, tabIndex, children }) {
    return (
        <Link href={url} className={styles['layout-interaction-button']} tabIndex={tabIndex}>
            {children}
        </Link>
    )
}
