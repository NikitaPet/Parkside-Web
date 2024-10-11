'use client'

import { useCallback } from 'react'
import { debounce } from 'ts-debounce'

export default function useDebounce(func: (...args: any) => any, delay = 0, deps = []) {
    const debounceFn = debounce(func, delay)
    const callback = useCallback(debounceFn, deps)
    return callback
}
export { useDebounce }
