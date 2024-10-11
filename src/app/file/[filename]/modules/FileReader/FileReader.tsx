'use client'

import React, { useState, useMemo } from 'react'
import Module from '@containers/Module'
import Document from '@/ui/Document'
import Popup from './Popup'
import { getPdfFile, getPdfFileUrl } from '@global/files/funcs'

import { useGetСurrentMedia } from '@global-hooks/useMediaQuery'

import styles from './styles/FileReader.module.scss'

export default function FileReader({ filename }) {
    const file = useMemo(() => getPdfFile(filename), [])
    const fileUrl = useMemo(() => getPdfFileUrl(filename), [])

    const [pagesCount, setPagesCount] = useState<number>(0)
    const mediaMode = useGetСurrentMedia()

    return (
        <Module className={styles['wrapper']}>
            <div className={styles['content']}>
                <div className={styles['document-box']}>
                    <Document
                        file={fileUrl}
                        pagesCount={pagesCount}
                        className={styles['document']}
                        pageWidth={pageWidths[mediaMode]}
                        onLoadSuccess={(document) => setPagesCount(document?.numPages ?? 0)}
                    />
                </div>
            </div>

            <Popup {...{ file, fileUrl }} />
        </Module>
    )
}
export { FileReader }

const pageWidths = {
    'mobile-320': 302,
    'mobile-375': 350,
    'mobile-414': 390,
    'tablet-768': 700,
    'tablet-834': 724,
    'tablet-1024': 872,
    'tablet-1280': 1032,
    'desktop-1440': 1072,
}
