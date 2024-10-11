import Link from 'next/link'

import Module from '@containers/Module'
import Title from '@/ui/Title'
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import Checkbox from '@/ui/Checkbox'
import Textarea from '@/ui/Textarea'
import sources from '@/global/files/sources'

import styles from './styles/Contact.module.scss'

export default function Contact() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.contact}>
                <div className={styles.info}>
                    <Title>Расскажите нам о своем проекте, и мы составим план его реализации</Title>
                    <p className={styles.description}>
                        Быстрее всего отвечаем в{' '}
                        <a href="https://telegram.me/parksidecompanybot" className={styles['link']}>
                            Telegram{' '}
                        </a>
                    </p>
                </div>

                <div className={styles.form}>
                    <div className={styles.inputs}>
                        <Input placeholder="Имя ответственного" />
                        <Input placeholder="E-mail или телефон" />
                        <Textarea placeholder="Краткое описание проекта" />
                    </div>

                    <div className={styles['conditions']}>
                        <Checkbox className={styles.checkbox} />
                        <p className={styles['conditions-description']}>
                            Принимаю условия{' '}
                            <Link
                                href={`/file/${sources.pdf.agreement}`}
                                className={styles['link']}
                            >
                                пользовательского соглашения{' '}
                            </Link>
                            и согласен(а) на обработку{' '}
                            <Link href={`/file/${sources.pdf.privacy}`} className={styles['link']}>
                                персональных данных{' '}
                            </Link>
                        </p>
                    </div>

                    <Button className={styles.button}>Запросить консультацию</Button>
                </div>
            </div>
        </Module>
    )
}
export { Contact }
