import cn from 'classnames'

import styles from './styles/Module.module.scss'

export default function Module({ children, className = '' }) {
    return (
        <section
            className={cn(styles.wrapper, {
                [className]: !!className,
            })}
        >
            {children}
        </section>
    )
}
export { Module }
