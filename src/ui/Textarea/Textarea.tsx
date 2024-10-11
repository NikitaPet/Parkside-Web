import { type DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import styles from './styles/Textarea.module.scss'

export default function Textarea(props: Props) {
    return <textarea className={styles.textarea} {...props} />
}
export { Textarea }

type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
