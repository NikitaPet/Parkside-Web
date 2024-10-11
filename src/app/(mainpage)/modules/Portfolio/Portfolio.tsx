import Module from '@containers/Module'
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import Checkbox from '@/ui/Checkbox'

import styles from './styles/Portfolio.module.scss'

export default function Portfolio() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.portfolio}>
                <div className={styles.info}>
                    <h2 className={styles.title}>Портфолио по запросу</h2>
                    <p className={styles.description}>
                        В разделе «Портфолио» — краткий список наших проектов по разработке сайтов,
                        приложений и чат-ботов. Больше примеров можно посмотреть в презентации,
                        которую мы высылаем на почту по запросу.
                    </p>
                </div>

                <div className={styles.form}>
                    <div className={styles.inputs}>
                        <Input placeholder="Имя" isError={false} />
                        <Input placeholder="Введите e-mail" isError={false} />
                    </div>

                    <Checkbox>
                        <p>
                            Принимаю условия <a href="#">пользовательского соглашения</a> и
                            согласен(а) на обработку <a href="#">персональных данных</a>
                        </p>
                    </Checkbox>

                    <Button className={styles.button}>Получить портфолио</Button>
                </div>
            </div>
        </Module>
    )
}
export { Portfolio }
