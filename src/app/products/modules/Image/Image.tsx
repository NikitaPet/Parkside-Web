import cn from 'classnames'

import Module from '@containers/Module'
import Image from '@/ui/Image'

import styles from './styles/Image.module.scss'

export default function ImageModule({ imgs }: { imgs: string[] }) {
    return (
        <Module className={styles['wrapper']}>
            <div className={cn(styles['content'])}>
                <div className={styles['imgs-box']}>
                    <ImageBox img={imgs[0]} />
                    <ImageBox img={imgs[1]} />
                </div>
            </div>
        </Module>
    )
}
export { ImageModule as Image }

export function ImageBox({ img }: { img: string }) {
    return (
        <div className={styles['img-box']}>
            <Image
                src={img}
                alt={img || 'photo'}
                className={styles['img']}
                width={10000}
                height={10000}
            />
        </div>
    )
}
