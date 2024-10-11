'use client'

import dynamic from 'next/dynamic'
import useMediaQuery from '@global-hooks/useMediaQuery'

import styles from './styles/Award.module.scss'

const Bricks = dynamic(() => import('./components').then((mod) => mod.Bricks), { ssr: false })

export default function CardsList() {
    const isMobile375Mode = useMediaQuery('mobile-375')
    const isTablet834Mode = useMediaQuery('tablet-834')
    const isTablet1024Mode = useMediaQuery('tablet-1024')
    const isTablet1280Mode = useMediaQuery('tablet-1280')
    const isDesktop1440Mode = useMediaQuery('desktop-1440')

    return (
        <div className={styles['cards-list']}>
            <div className={styles['sub-cards-list']}>
                <Card
                    percent={3}
                    bricksNum={
                        isTablet1280Mode ? 5 : isTablet1024Mode ? 4 : isMobile375Mode ? 3 : 4
                    }
                    condition={'1-5 договоров'}
                />
                <Card
                    percent={5}
                    bricksNum={
                        isTablet1280Mode ? 5 : isTablet1024Mode ? 4 : isMobile375Mode ? 3 : 4
                    }
                    condition={'6-10 договоров'}
                />
            </div>

            <div className={styles['sub-cards-list']}>
                <Card
                    percent={7}
                    bricksNum={
                        isDesktop1440Mode
                            ? 10
                            : isTablet1280Mode
                              ? 8
                              : isTablet1024Mode
                                ? 6
                                : isTablet834Mode
                                  ? 5
                                  : isMobile375Mode
                                    ? 4
                                    : 5
                    }
                    condition={'11-20 договоров'}
                />
                <Card
                    percent={10}
                    bricksNum={isTablet1280Mode ? 3 : isMobile375Mode ? 2 : 3}
                    condition={'с 21 договора'}
                />
            </div>
        </div>
    )
}
export { CardsList }

export function Card({
    percent,
    bricksNum,
    optionalBricksNum,
    condition,
}: {
    bricksNum: number
    optionalBricksNum?: number
    percent: number
    condition: string
}) {
    return (
        <div className={styles['card']}>
            <div className={styles['percent']}>{percent + '%'}</div>
            <Bricks bricksNum={bricksNum} optionalBricksNum={optionalBricksNum} />
            <div className={styles['condition']}>{condition}</div>
        </div>
    )
}
