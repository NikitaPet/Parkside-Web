import cn from 'classnames'
import styles from './styles/Text.module.scss'

export default function Text({ children, className }: Props) {
    return <p className={cn(styles.text, { [className]: className })}>{children}</p>
}
export { Text }

type Props = {
    children?: React.ReactNode
    className?: string
}
