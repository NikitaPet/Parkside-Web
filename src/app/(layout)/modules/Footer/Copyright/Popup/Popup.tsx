'use client'

import cn from 'classnames'
import Link from 'next/link'
import Button from '@/ui/Button'

import styles from './styles/Popup.module.scss'

export default function Popup({ isActive, setActive }) {
    const onClickButton = () => {
        window.open('mailto:partner@parkside.cc', '_blank')
        setActive(false)
    }
    return (
        <div className={cn(styles.wrapper, { [styles.inactive]: !isActive })}>
            <div className={styles.window}>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Hello!
                        <br />
                        <br />
                        We are looking for partners who share our commitment to providing
                        high-quality services in the IT industry, for collaboration worldwide.
                        <br />
                        <br />
                        <Link href="/partners" className={styles.link}>
                            Please review our partnership terms and conditions
                        </Link>
                    </p>

                    <Button className={styles.button} onClick={() => onClickButton()}>
                        Become a partner
                    </Button>
                </div>
            </div>
        </div>
    )
}
export { Popup }
