import ArrowExtended from '@/shared/svg/ArrowExtended'

import styles from '@global/styles/all-assets.module.scss'

const colorN1 = styles['bg-color']

export default function CustomArrowExtended({ className = '' }) {
    return <ArrowExtended colorN1={colorN1} colorN2={colorN1} className={className} />
}
export { CustomArrowExtended as ArrowExtended }
