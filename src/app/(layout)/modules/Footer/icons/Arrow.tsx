import Arrow from '@/shared/svg/Arrow'

import styles from '@global/styles/all-assets.module.scss'

const colorN1 = styles['icon-color']
const colorN2 = styles['grey-color-3']
const colorN3 = styles['blue-color']

export default function CustomArrow({ isActive = false, className = '' }) {
    const activeColor = isActive ? colorN3 : colorN1
    return <Arrow colorN1={activeColor} colorN2={colorN2} className={className} />
}
export { CustomArrow as Arrow }
