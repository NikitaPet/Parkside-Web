'use client'

import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { type Dispatch, type SetStateAction } from 'react'

import { lightTheme, darkTheme } from './themes'
import { type ThemeType, type ThemesType } from './themes'

export default function ThemeWrapper({ children }) {
    const [theme, setTheme] = useState<ThemeType>(lightTheme)

    useEffect(() => {
        if (document?.documentElement) setThemeStyles(theme)
    }, [theme])

    return (
        <Context.Provider value={{ currentTheme: theme, setTheme, themes }}>
            {children}
        </Context.Provider>
    )
}
export { ThemeWrapper }

export const setThemeStyles = (theme: ThemeType): void => {
    const documentStyle = document.documentElement.style
    for (const key in theme) documentStyle.setProperty(`--${key}`, theme[key])
}

export const themes: ThemesType = { light: lightTheme, dark: darkTheme }
export const availableThemes = Object.keys(themes)

export const Context = createContext<ContextType>(null)
export type ThemeSetter = Dispatch<SetStateAction<ThemeType>>
export type ContextType = { currentTheme: ThemeType; setTheme: ThemeSetter; themes: ThemesType }
