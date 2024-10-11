'use client'

import { useState } from 'react'
import { createContext } from 'react'
import { type Dispatch, SetStateAction } from 'react'
import { NavMenu, NavMenuProps } from './components'
import { Menu, Services, Contacts, Clients } from './components'

import styles from './styles/CompactNav.module.scss'

export default function CompactNav() {
    const [activeNavMenu, setActiveNavMenu] = useState<NavMenuProps['navMenuName']>(null)

    return (
        <CompactNavContext.Provider value={{ activeNavMenu, setActiveNavMenu }}>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    <NavMenu Content={Menu} navMenuName="menu">
                        Меню
                    </NavMenu>

                    <NavMenu Content={Services} navMenuName="services">
                        Услуги
                    </NavMenu>

                    <NavMenu Content={Clients} navMenuName="clients">
                        Встречи с клиентами
                    </NavMenu>
                    
                    <NavMenu Content={Contacts} navMenuName="contacts">
                        Контакты
                    </NavMenu>
                </div>
            </div>
        </CompactNavContext.Provider>
    )
}
export { CompactNav }

export const CompactNavContext = createContext<CompactNavContextType>({
    activeNavMenu: null,
    setActiveNavMenu: () => {},
})

type CompactNavContextType = {
    activeNavMenu: string | null
    setActiveNavMenu: Dispatch<SetStateAction<string>>
}
