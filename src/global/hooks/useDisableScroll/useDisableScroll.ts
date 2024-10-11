'use client'

import { useEffect, useState, useCallback } from 'react'

// scrollElement: Target = null

export default function useDisableScroll() {
    const initState: StateOptionsType = { target: null, isTargetDisable: false, scrollTop: 0 }
    const [state, setState] = useState(initState)
    const { target, isTargetDisable, scrollTop } = state

    const updateState = useCallback(
        (isDisableRequired = false) => {
            const { target } = state
            if (isDisableRequired !== state.isTargetDisable) {
                state.isTargetDisable = isDisableRequired
                state.scrollTop = target.scrollY
                // if (target !== window) state.scrollTop = target.scrollTop
                setState({ ...state })
            }
        },
        [state.target],
    )

    const handleScrolling = useCallback(() => {
        const scrollOptions: ScrollOptionsType = { top: scrollTop, behavior: 'auto' }
        target.scrollTo(scrollOptions)
    }, [state])

    useEffect(() => {
        // state.target = scrollElement ? scrollElement : window
        state.target = window
        setState({ ...state })
    }, [])

    useEffect(() => {
        if (!target) return

        const addScrollListener = () => target.addEventListener('scroll', handleScrolling)
        const removeScrollListener = () => target.removeEventListener('scroll', handleScrolling)

        if (isTargetDisable) addScrollListener()
        else removeScrollListener()

        return () => removeScrollListener()
    }, [state])

    return updateState
}
export { useDisableScroll }

// export type Target = HTMLDivElement | Window
export type Target = Window
export type StateOptionsType = {
    target: Target
    isTargetDisable: boolean
    scrollTop: number
}
export type ScrollOptionsType = { top: number; behavior: 'auto' | 'smooth' }
