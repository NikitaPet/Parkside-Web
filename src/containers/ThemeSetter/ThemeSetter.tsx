'use client'

import { useEffect } from 'react'
import { useContext } from 'react'
import { Context as ThemeContext } from '@layout/modules/ThemeWrapper'
import { type AvailableThemeNamesType } from '@layout/modules/ThemeWrapper/themes'

export default function ThemeSetter({ theme = 'light', children }: Props) {
    const themeData = useContext(ThemeContext)
    const { setTheme, themes } = themeData

    const { light: lightTheme, dark: darkTheme } = themes

    useEffect(() => {
        if (theme === 'light') setTheme(lightTheme)
        if (theme === 'dark') setTheme(darkTheme)

        return () => setTheme(lightTheme)
    }, [])

    return children
}
export { ThemeSetter }

type Props = {
    theme?: AvailableThemeNamesType
    children: React.ReactNode
}
