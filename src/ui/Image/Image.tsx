import Image from 'next/image'
// import { type ImageLoaderProps } from 'next/image'

export default function CustomImage({
    src,
    alt = '',
    className = '',
    width = 3000,
    height = 3000,
    objectFit = 'contain',
    style = {},
    // sizes = '100%',
    ...props
}: Props) {
    if (!style?.objectFit) style.objectFit = objectFit
    return (
        <Image
            className={className}
            src={src}
            width={width}
            height={height}
            style={style}
            alt={alt}
            // sizes={sizes}
            priority
            {...props}
        />
    )
}
export { CustomImage as Image }

type Props = {
    src: string
    alt?: string
    className?: string
    objectFit?: string
    style?: any
    // sizes?: string
    width?: number
    height?: number
}
