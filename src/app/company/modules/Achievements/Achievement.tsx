import styles from './styles/Achievements.module.scss'

export default function Achievement({ title, value }) {
    return (
        <div className={styles.achievement}>
            <h3 className={styles.title}>{title}</h3>
            <h2 className={styles.value}>{value}</h2>
        </div>
    )
}
export { Achievement }
