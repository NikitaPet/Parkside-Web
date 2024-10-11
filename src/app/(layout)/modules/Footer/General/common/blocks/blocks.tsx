'use client'

import { createContext } from 'react'
import TelegramIcon from '@layout/modules/Footer/icons/specials/socials/Telegram'
import WhatsAppIcon from '@layout/modules/Footer/icons/specials/socials/WhatsApp'

import { NavLink, ContactLink, SocialLink } from './components'

import styles from './styles/blocks.module.scss'

export default function Menu({ isOpen = true }) {
    const tabIndex = isOpen ? 0 : -1
    return (
        <Context.Provider value={{ tabIndex }}>
            <div className={styles.list}>
                <NavLink href="/services">Услуги</NavLink>
                <NavLink href="/products">Продукты</NavLink>
                <NavLink href="/projects">Портфолио</NavLink>
                <NavLink href="/company">О компании</NavLink>
            </div>
        </Context.Provider>
    )
}
export { Menu }

export function Services({ isOpen = true }) {
    const tabIndex = isOpen ? 0 : -1
    return (
        <Context.Provider value={{ tabIndex }}>
            <div className={styles.list}>
                <NavLink href="/services#product-development">Разработка IT-продуктов</NavLink>
                <NavLink href="/services#analytics-and-testing">Аналитика и тестирование</NavLink>
                <NavLink href="/services#product-design">Продуктовый дизайн</NavLink>
                <NavLink href="/services#support-and-development">
                    Поддержка и сопровождение
                </NavLink>
            </div>
        </Context.Provider>
    )
}

export function Contacts({ isOpen = true }) {
    const tabIndex = isOpen ? 0 : -1
    return (
        <Context.Provider value={{ tabIndex }}>
            <div className={styles.contacts}>
                <ContactLink href="mailto:inbox@parkside.cc">hi@parkside.cc</ContactLink>
                <ContactLink href="tel:+74951754254">+7 495 175-42-54</ContactLink>

                <div className={styles.social}>
                    <SocialLink href="https://telegram.me/parksidecompanybot" Icon={TelegramIcon} />
                    <SocialLink href="https://wa.me/79951144254" Icon={WhatsAppIcon} />
                </div>
            </div>
        </Context.Provider>
    )
}

export function Clients() {
    return <p>г. Москва, Варшавское шоссе 28А, коворкинг «Свободное плавание»</p>
}

export const Context = createContext<{ tabIndex: number }>({ tabIndex: 1 })
