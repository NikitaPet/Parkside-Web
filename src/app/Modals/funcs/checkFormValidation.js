export const checkFormValidation = (formData) => {
    const { autor, type, description } = formData

    const autoRegEx = new RegExp(/^[a-zA-Zа-яёА-ЯЁ]+$/)
    const isAutorValid = autor?.length && autoRegEx.test(autor)
    const isTypeValid = type?.length
    const isDescriptionValid = description?.length

    if (!isAutorValid) return 'autor'
    if (!isTypeValid) return 'type'
    if (!isDescriptionValid) return 'description'
}
export default checkFormValidation
