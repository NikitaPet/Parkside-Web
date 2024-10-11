import Service from '@/app/services/modules/Services'

import services from './data/services.json'

export default function ServiceN1() {
    return (
        <Service
            title={'Разработка IT\u2011продуктов'}
            data={services}
            id={'product-development'}
        />
    )
}
export { ServiceN1 }
