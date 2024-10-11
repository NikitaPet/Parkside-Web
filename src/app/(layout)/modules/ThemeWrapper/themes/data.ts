import { type ThemeType } from './types'
import colors from './colors.module.scss'

export const lightTheme: ThemeType = {
    name: 'light',
    'body-color': colors['white-color-2'],
    'bg-color': colors['white-color'],
    'text-color': colors['black-color'],
    'icon-color': colors['black-color'],
}

export const darkTheme: ThemeType = {
    name: 'dark',
    'body-color': colors['black-color-3'],
    'bg-color': colors['black-color'],
    'text-color': colors['white-color'],
    'icon-color': colors['white-color'],
}
