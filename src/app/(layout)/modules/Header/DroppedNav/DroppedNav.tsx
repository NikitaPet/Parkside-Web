'use client'

import { useEffect, useState } from 'react'
import useDisableScroll from '@global-hooks/useDisableScroll'
import useMediaQuery from '@global-hooks/useMediaQuery'
import { Menu, Logo, Phone } from './components'

import styles from './styles/DroppedNav.module.scss'

export default function DroppedNav() {
    const [isActive, setActive] = useState(false)
    const closeDropDownWindow = () => setActive(false)

    const isDesktopMode = useMediaQuery('desktop')

    const disableScroll = useDisableScroll()

    useEffect(() => {
        disableScroll(isActive)
        return () => disableScroll(false)
    }, [isActive])

    useEffect(() => {
        if (isDesktopMode) setActive(false)
    }, [isDesktopMode])

    return (
        <div className={styles.wrapper}>
            <Menu
                onClick={() => setActive(!isActive)}
                isSticky={true}
                {...{ isActive, closeDropDownWindow }}
            />
            <Logo />
            <Phone tel="+74951754254" />
        </div>
    )
}
export { DroppedNav }
