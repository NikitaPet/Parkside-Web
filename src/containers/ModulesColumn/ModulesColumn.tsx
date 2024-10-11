import cn from 'classnames'

import { type AvailableThemeNamesType } from '@layout/modules/ThemeWrapper/themes'
import ThemeSetter from '@containers/ThemeSetter'

import styles from './styles/ModulesColumn.module.scss'

export default function PageModules({ theme = 'light', className = '', children }: Props) {
    return (
        <ThemeSetter theme={theme}>
            <div
                className={cn(styles.wrapper, {
                    [className]: !!className,
                })}
            >
                {children}
            </div>
        </ThemeSetter>
    )
}
export { PageModules }

type Props = {
    theme?: AvailableThemeNamesType
    className?: string
    children: React.ReactNode
}
