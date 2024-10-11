import cn from 'classnames'

import Module from '@containers/Module'

import styles from './styles/Description.module.scss'

export default function Description() {
    return (
        <Module className={styles['wrapper']}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className={cn(styles['text'])}>
                        Библиотека готовых дизайнерских элементов помогает нам быстрее собирать
                        проекты и экономить время заказчиков. Уже на этапе обсуждения продукта
                        проджект-менеджер Parkside может собрать рабочий прототип с базовыми
                        элементами, чтобы нагляднее визуализировать идеи клиентов и представить их
                        на общем обсуждении.
                    </div>

                    <div className={cn(styles['text'])}>
                        В нашей коллекции:
                        <ul className={cn(styles['list'])}>
                            <li className={cn(styles['list-item'], styles['text'])}>чекбоксы,</li>
                            <li className={cn(styles['list-item'], styles['text'])}>
                                радиокнопки и тоглы (переключатели),
                            </li>
                            <li className={cn(styles['list-item'], styles['text'])}>
                                полосы прокрутки и ползунки,
                            </li>
                            <li className={cn(styles['list-item'], styles['text'])}>
                                модальные окна и подсказки,
                            </li>
                            <li className={cn(styles['list-item'], styles['text'])}>
                                меню и виджеты,
                            </li>
                            <li className={cn(styles['list-item'], styles['text'])}>
                                списки и таблицы,
                            </li>
                            <li className={cn(styles['list-item'], styles['text'])}>
                                шрифты, цвета и многое другое.
                            </li>
                        </ul>
                    </div>

                    <div className={cn(styles['text'])}>
                        С каждым новым проектом наша библиотека растёт, в ней появляются элементы,
                        необходимые для самых разных сегментов рынка. Если заказчику не хочется
                        вкладываться в отрисовку уникальных иконок и элементов интерфейса, мы
                        предлагаем ему шаблонные решения из нашей готовой коллекции. Так мы делаем
                        проект дешевле и приближаем дату его запуска.
                    </div>
                </div>

                <div className={styles.values}>
                    <div className={styles.value}>
                        <div className={styles['value-number']}>28</div>
                        <div className={styles['value-name']}>Категорий</div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles['value-number']}>92</div>
                        <div className={styles['value-name']}>Компонента</div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles['value-number']}>78</div>
                        <div className={styles['value-name']}>Иконок</div>
                    </div>
                </div>
            </div>
        </Module>
    )
}
export { Description }
