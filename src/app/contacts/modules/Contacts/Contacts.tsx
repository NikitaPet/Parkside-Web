import cn from 'classnames'

import Module from '@containers/Module'
import Title from '@/ui/Title'

import styles from './styles/Contacts.module.scss'

export default function Contacts() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.info}>
                <Title>Контакты</Title>
            </div>

            <div className={styles.content}>
                <div className={styles.column}>
                    <div className={styles.contact}>
                        <SubTitle>Принимаем заявки и отвечаем на вопросы</SubTitle>
                        <div className={cn(styles['text-box'], styles.grid)}>
                            <Text>Telegram:</Text>
                            <Text>ParksideCompanyBot</Text>

                            <Text>Whatsapp:</Text>
                            <Text>+7 995 114 42 54</Text>

                            <Text>Телефон:</Text>
                            <Text>+7 495 175-42-54</Text>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <SubTitle>Встречаемся с клиентами</SubTitle>
                        <div className={styles['text-box']}>
                            <SubText>По предварительной договоренности</SubText>
                            <Text>
                                г. Москва, Варшавское шоссе 28А, коворкинг «Свободное плавание»
                            </Text>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.contact}>
                        <SubTitle>Обсуждаем проектные заказы</SubTitle>
                        <div className={styles['text-box']}>
                            <a href="inbox@parkside.cc">
                                <Text>inbox@parkside.cc</Text>
                            </a>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <SubTitle>Общаемся с партнерами</SubTitle>
                        <div className={styles['text-box']}>
                            <a href="partner@parkside.cc">
                                <Text>partner@parkside.cc</Text>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.contact}>
                        <SubTitle>Мы на связи</SubTitle>
                        <div className={styles['text-box']}>
                            <Text>С 9 до 18 (GMT+3) </Text>
                            <Text>С понедельника по пятницу</Text>
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    )
}
export { Contacts }

export function SubTitle({ children = '' }) {
    return <h3 className={styles.subtitle}>{children}</h3>
}

export function Text({ children = '' }) {
    return <p className={styles.text}>{children}</p>
}

export function SubText({ children = '' }) {
    return <p className={styles.subtext}>{children}</p>
}
