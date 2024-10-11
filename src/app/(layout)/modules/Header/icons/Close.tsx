import Close from '@/shared/svg/Close'

import styles from '@global/styles/all-assets.module.scss'

const colorN1 = styles['icon-color']
const colorN2 = styles['grey-color-3']
const colorN3 = styles['blue-color']

export default function CustomClose({ isActive = false, className = '' }) {
    const activeColor = isActive ? colorN3 : colorN1
    return <Close colorN1={activeColor} colorN2={colorN2} className={className} />
}
export { CustomClose as Close }
