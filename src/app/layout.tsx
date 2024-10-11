import type { Metadata } from 'next'

import ThemeWrapper from '@layout/modules/ThemeWrapper'
import Header from '@layout/modules/Header'
import Footer from '@layout/modules/Footer'
import CookiePopup from '@layout/modules/CookiePopup'

import Golos from '@global-styles-fonts/Golos'

import 'global/styles/global-styles.scss'
import styles from '@layout/styles/layout.module.scss'

export default function RootLayout({ children }) {
    return (
        <html lang="ru" className={Golos.variable}>
            <body>
                <ThemeWrapper>
                    <div id={'layout'} className={styles.wrapper}>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                        <CookiePopup />
                    </div>
                </ThemeWrapper>
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    title: 'Разработка и сопровождение сайтов',
    description:
        'Создание сайтов любой сложности в г.Москва, создание интернет-магазинов, создание сайтов визиток, создание лендингов, создание сайта компании, сопровождение сайтов от профессионалов.',
    keywords:
        'москва, калуга, создание сайтов недорого, разработка сайтов недорого, создание интернет магазина инсейлс, разработка сайтов под ключ',
    openGraph: {
        title: 'Разработка и сопровождение сайтов',
        description:
            'Создание сайтов любой сложности в г.Москва, создание интернет-магазинов, создание сайтов визиток, создание лендингов, создание сайта компании, сопровождение сайтов от профессионалов.',
        url: 'https://parkside.cc',
        siteName: 'ИТ-департамент Parkside',
        type: 'website',
    },
    metadataBase: new URL('https://parkside.cc'),
    other: {
        'geo.country': 'RU',
        'geo.placename': 'г.Москва, Варшавское шоссе 28А',
        'geo.position': '55.682761, 37.617919',
        'geo.region': 'RU-Москва',
        ICBM: '55.682761, 37.617919',
    },
    robots: {
        index: true,
        follow: true,
    },
}
