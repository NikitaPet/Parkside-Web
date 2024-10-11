import styles from './styles/Explanation.module.scss'

const cardColor = styles['card-color']

export function BridgeSVG() {
    return (
        <svg
            width="22"
            height="46"
            viewBox="0 0 22 46"
            fill={cardColor}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="11" cy="11" r="9.5" stroke="white" strokeWidth="3" />
            <circle cx="11" cy="35" r="9.5" stroke="white" strokeWidth="3" />
            <rect x="9" y="11" width="4" height="24" />
        </svg>
    )
}
