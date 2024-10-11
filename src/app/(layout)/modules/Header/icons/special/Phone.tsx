import classNames from 'classnames'
import styles from '@global/styles/all-assets.module.scss'

const colorN1 = styles['icon-color']
const colorN2 = styles['grey-color-3']

export default function Phone({ className = '' }) {
    return (
        <svg
            className={classNames({ [className]: className })}
            viewBox="0 0 24 24"
            fill={colorN1}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 9C11.4 9 11 9.4 11 10V16C11 16.6 11.4 17 12 17C12.6 17 13 16.6 13 16V10C13 9.4 12.6 9 12 9Z"
                fill={colorN2}
            />
            <path
                d="M9 11C8.4 11 8 11.4 8 12V14C8 14.6 8.4 15 9 15C9.6 15 10 14.6 10 14V12C10 11.4 9.6 11 9 11Z"
                fill={colorN2}
            />
            <path
                d="M15 11C14.4 11 14 11.4 14 12V14C14 14.6 14.4 15 15 15C15.6 15 16 14.6 16 14V12C16 11.4 15.6 11 15 11Z"
                fill={colorN2}
            />
            <path d="M7 5C7 4.4 7.4 4 8 4H9V5C9 5.6 9.4 6 10 6H14C14.6 6 15 5.6 15 5V4H16C16.6 4 17 4.4 17 5V14C17 14.6 17.4 15 18 15C18.6 15 19 14.6 19 14V5C19 3.3 17.7 2 16 2H8C6.3 2 5 3.3 5 5V6C5 6.6 5.4 7 6 7C6.6 7 7 6.6 7 6V5Z" />
            <path d="M17 19C17 19.6 16.6 20 16 20H8C7.4 20 7 19.6 7 19V11C7 10.4 6.6 10 6 10C5.4 10 5 10.4 5 11V19C5 20.7 6.3 22 8 22H16C17.7 22 19 20.7 19 19C19 18.4 18.6 18 18 18C17.4 18 17 18.4 17 19Z" />
        </svg>
    )
}
export { Phone }
