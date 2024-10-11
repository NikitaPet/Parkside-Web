import Service from '@/app/services/modules/Services'

import services from './data/services.json'

export default function ServiceN3() {
    return (
        <Service title={'Аналитика и тестирование'} data={services} id={'analytics-and-testing'} />
    )
}
export { ServiceN3 }
