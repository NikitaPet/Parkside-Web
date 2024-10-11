import Link from 'next/link'

import Module from '@containers/Module'
import Title from '@/ui/Title'
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import Checkbox from '@/ui/Checkbox'
import sources from '@/global/files/sources'

import styles from './styles/Contact.module.scss'

export default function Contact() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.contact}>
                <div className={styles.info}>
                    <Title>Присоединяйтесь к партнерской программе Parkside</Title>
                    <p className={styles.description}>
                        Оставьте заявку на сайте или напишите нам в{' '}
                        <a href="https://telegram.me/parksidecompanybot" className={styles['link']}>
                            Telegram
                        </a>
                        . Мы обсудим условия, подпишем договор и начнем работать и зарабатывать
                        вместе.{' '}
                    </p>
                </div>

                <div className={styles.form}>
                    <div className={styles.inputs}>
                        <Input placeholder="Имя ответственного" />
                        <Input placeholder="E-mail или телефон" />
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

                    <Button className={styles.button}>Отправить заявку</Button>
                </div>
            </div>
        </Module>
    )
}
export { Contact }
