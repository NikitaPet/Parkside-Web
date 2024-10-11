'use client'

import { type HTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './styles/Button.module.scss'

export function Button({ className = null, children, ...props }: Props) {
    return (
        <button
            className={cn(styles.default, {
                [className]: !!className,
            })}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button

type Props = HTMLAttributes<HTMLButtonElement>
