'use client'

import useDownloader from 'react-use-downloader'
import cn from 'classnames'

import Button from '@/ui/Button'

import styles from './styles/Popup.module.scss'

export default function Popup({ file, fileUrl }) {
    const { download } = useDownloader()
    return (
        <div className={cn(styles.wrapper)}>
            <div className={styles.window}>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Документ подписан квалифицированный электронной подписью.{' '}
                        <br className={styles.break} />
                        Для просмотра подписанного файла используйте{' '}
                        <a href="https://cryptoarm.ru/">КриптоАРМ ГОСТ</a>.
                    </p>
                    <Button className={styles.button} onClick={() => download(fileUrl, file)}>
                        Скачать файл
                    </Button>
                </div>
            </div>
        </div>
    )
}
export { Popup }
