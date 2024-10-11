import Service from '@/app/services/modules/Services'

import services from './data/services.json'

export default function ServiceN4() {
    return (
        <Service
            title={'Сопровождение и развитие'}
            data={services}
            id={'support-and-development'}
        />
    )
}
export { ServiceN4 }
