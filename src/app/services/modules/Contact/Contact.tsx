import Module from '@containers/Module'
import Title from '@/ui/Title'
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import Checkbox from '@/ui/Checkbox'
import Textarea from '@/ui/Textarea'

import styles from './styles/Contact.module.scss'

export default function Contact() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.contact}>
                <div className={styles.info}>
                    <Title>Расскажите о своем проекте, и мы придумаем, как вам помочь</Title>
                    <p className={styles.description}>
                        Напишите нам в{' '}
                        <a href="https://telegram.me/parksidecompanybot" className={styles['link']}>
                            Telegram
                        </a>{' '}
                        или оставьте заявку на сайте
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
                            <a href="#" className={styles['link']}>
                                пользовательского соглашения
                            </a>{' '}
                            и согласен(а) на обработку{' '}
                            <a href="#" className={styles['link']}>
                                персональных данных
                            </a>{' '}
                        </p>
                    </div>

                    <Button className={styles.button}>Запросить консультацию</Button>
                </div>
            </div>
        </Module>
    )
}
export { Contact }
