'use client'

import { useEffect, useCallback } from 'react'

export default function useClickInside(
    wrapper: HTMLElement,
    callback: Function,
    options: { reverseMode: boolean } = { reverseMode: false },
) {
    const isReverseMode = options.reverseMode
    const isDirectMode = !isReverseMode

    const onClick = useCallback(
        ({ target }) => {
            const isClickOnWrapper = wrapper === target
            const isClickOnWrapperChildren = wrapper?.contains(target)
            const isClickInside = isClickOnWrapper || isClickOnWrapperChildren
            const isClickOutside = !isClickInside

            if (isDirectMode) {
                if (isClickInside) callback()
            } else {
                if (isClickOutside) callback()
            }
        },
        [wrapper, callback],
    )

    useEffect(() => {
        if (wrapper) document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [onClick])

    return { wrapper, callback }
}
export { useClickInside }
