import { CSSProperties } from 'react'

export type Color = CSSProperties['color']

export type ThemesType = { light: ThemeType; dark: ThemeType }
export type AvailableThemeNamesType = keyof ThemesType

export type ThemeType = {
    name: AvailableThemeNamesType
    'body-color'?: Color
    'bg-color'?: Color
    'text-color'?: Color
    'icon-color'?: Color
}
