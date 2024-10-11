import Modules from '@containers/ModulesColumn'
import Title from './modules/Title'
import Image from './modules/Image'
import Description from './modules/Description'

export default function Page() {
    return (
        <Modules>
            <Title />
            <Image imgs={['/img/main/products/img-1.jpg', '/img/main/products/img-2.jpg']} />
            <Description />
            <Image imgs={['/img/main/products/img-3.jpg', '/img/main/products/img-4.jpg']} />
        </Modules>
    )
}
