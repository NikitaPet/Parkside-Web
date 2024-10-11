import Service from '@/app/services/modules/Services'

import services from './data/services.json'

export default function ServiceN2() {
    return <Service title={'Продуктовый дизайн'} data={services} id={'product-design'} />
}
export { ServiceN2 }
