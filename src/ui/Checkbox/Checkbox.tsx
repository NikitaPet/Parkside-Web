'use client'

import { useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import styles from './styles/Checkbox.module.scss'

type Props = HTMLAttributes<HTMLInputElement> & {
    children?: ReactNode
}

export function Checkbox({ className, children, ...props }: Props) {
    const [isChecked, setChecked] = useState(false)
    return (
        <button
            className={cn(styles.wrapper, { [className]: className })}
            onClick={() => setChecked(!isChecked)}
        >
            <input
                type="checkbox"
                className={styles.input}
                {...props}
                checked={isChecked}
                onChange={() => {}}
            />
            <div className={styles['custom-checkbox-wrapper']}>
                <div className={styles['custom-checkbox']}>
                    <svg
                        className={styles.icon}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.52422 10.5219L4.96422 7.44187C4.61076 7.01662 3.97948 6.95841 3.55422 7.31188C3.12896 7.66534 3.07076 8.29662 3.42422 8.72187L5.98422 11.8019C6.33768 12.2271 6.96896 12.2853 7.39422 11.9319C7.81948 11.5784 7.87768 10.9471 7.52422 10.5219Z"
                            fill="#8D8D8D"
                        />
                        <path
                            d="M10.9706 4.21239L6.00832 10.5638C5.6785 10.9859 5.75335 11.5955 6.1755 11.9253L6.22278 11.9623C6.64493 12.2921 7.25453 12.2172 7.58435 11.7951L12.5466 5.44371C12.8764 5.02156 12.8015 4.41197 12.3794 4.08215L12.3321 4.04521C11.91 3.71539 11.3004 3.79024 10.9706 4.21239Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
            {children && <div>{children}</div>}
        </button>
    )
}
export default Checkbox
