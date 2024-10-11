'use client'

import { useMediaQuery, type Mode } from './useMediaQuery'

export default function useGetСurrentMedia(): Mode {
    let currentMode: Mode = null

    const isMobile320Mode = useMediaQuery('mobile-320')
    if (isMobile320Mode) currentMode = 'mobile-320'

    const isMobile375Mode = useMediaQuery('mobile-375')
    if (isMobile375Mode) currentMode = 'mobile-375'

    const isMobile414Mode = useMediaQuery('mobile-414')
    if (isMobile414Mode) currentMode = 'mobile-414'

    const isTablet768Mode = useMediaQuery('tablet-768')
    if (isTablet768Mode) currentMode = 'tablet-768'

    const isTablet834Mode = useMediaQuery('tablet-834')
    if (isTablet834Mode) currentMode = 'tablet-834'

    const isTablet1024Mode = useMediaQuery('tablet-1024')
    if (isTablet1024Mode) currentMode = 'tablet-1024'

    const isTablet1280Mode = useMediaQuery('tablet-1280')
    if (isTablet1280Mode) currentMode = 'tablet-1280'

    const isDesktop1440Mode = useMediaQuery('desktop-1440')
    if (isDesktop1440Mode) currentMode = 'desktop-1440'

    return currentMode
}
export { useGetСurrentMedia }
