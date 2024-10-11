export const getPdfFileUrl = (file: string): string => {
    const host = window?.location?.origin
    if (!host) return null

    const filePDF = getPdfFile(file)
    const fileURL = `${host}/files/${filePDF}`
    return fileURL
}

export const getPdfFile = (filename: string): string => {
    const filePDF = `${filename}.pdf`
    return filePDF
}
