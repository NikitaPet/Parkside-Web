'use client'

import { useMediaQuery } from 'react-responsive'

import breakpoints from './breakpoints.module.scss'

export default function useCustomQuery(mode: Mode): boolean {
    const isModeAvailable = !!breakpoints[mode]

    const query = JSON.parse(isModeAvailable ? breakpoints[mode] : '""')
    const isCurrentMode = useMediaQuery({ query })

    return isModeAvailable ? isCurrentMode : null
}
export { useCustomQuery as useMediaQuery }

// export type Mode = keyof typeof breakpoints
export type Mode = keyof typeof Modes
export enum Modes {
    mobile,
    'tablet',
    'desktop',
    'mobile-320',
    'mobile-375',
    'mobile-414',
    'tablet-768',
    'tablet-834',
    'tablet-1024',
    'tablet-1280',
    'desktop-1440',
}
