import { Document, Page, pdfjs } from 'react-pdf'
import { type DocumentProps } from 'react-pdf'
import { Fragment } from 'react'
import cn from 'classnames'

import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import './styles/Document.scss'

export default function CustomDocument({
    pagesCount,
    pageWidth,
    className,
    onLoadSuccess,
    children,
    ...props
}: CustomDocumentProps) {
    return (
        <Document
            onLoadSuccess={(document) => onLoadSuccess(document)}
            className={cn({ [className]: className })}
            {...props}
        >
            {children ?? <PagesArray {...{ pagesCount, pageWidth }} />}
        </Document>
    )
}
export { CustomDocument as Document }
export { Page }

export function PagesArray({ pagesCount, pageWidth }: PagesArrayProps) {
    return (
        <Fragment>
            {[...Array(pagesCount ?? 0).keys()].map((i) => (
                <Page pageNumber={i + 1} width={pageWidth} key={i} />
            ))}
        </Fragment>
    )
}

type CustomDocumentProps = DocumentProps &
    PagesArrayProps & {
        fileUrl?: DocumentProps['file']
        className?: string
        pageClassName?: string
    }

type PagesArrayProps = DocumentProps & {
    pagesCount?: number
    pageWidth?: number
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
// pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/legacy/build/pdf.worker.min.mjs', import.meta.url).toString()
