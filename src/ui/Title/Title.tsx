import React from 'react'
import cn from 'classnames'
import styles from './Title.module.scss'

export default function Title({ children, className, style = 'black' }: Props) {
    return React.createElement(
        'h1',
        {
            className: cn(styles['h1'], {
                ['white-style']: style === 'white',
                [className]: className,
            }),
        },
        children,
    )
}
export { Title }

type Props = {
    children?: React.ReactNode
    className?: string
    style?: 'black' | 'white'
}
