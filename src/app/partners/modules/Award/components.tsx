import cn from 'classnames'

import styles from './styles/Award.module.scss'

export function Bricks({
    bricksNum,
    optionalBricksNum = 0,
}: {
    bricksNum: number
    optionalBricksNum?: number
}) {
    const baseBricksNum = bricksNum - optionalBricksNum
    return (
        <div className={styles['bricks']}>
            {[...Array(baseBricksNum).keys()].map((i) => (
                <div className={styles['brick']} key={i} />
            ))}
            {[...Array(optionalBricksNum).keys()].map((i) => (
                <div className={cn(styles['brick'], styles['optional-brick'])} key={i} />
            ))}
        </div>
    )
}
