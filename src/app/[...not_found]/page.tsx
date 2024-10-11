'use client'

import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import useRedirect from '@global-hooks/useRedirect'

export default function PageNotFound() {
    // const redirect = useRouter().push
    const redirect = useRedirect()
    useEffect(() => redirect('/'))
    return null
}
