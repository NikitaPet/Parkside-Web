import Modules from '@containers/ModulesColumn'
import Hero from './modules/Hero'
import ServiceN1 from './modules/ServiceN1'
import ServiceN2 from './modules/ServiceN2'
import ServiceN3 from './modules/ServiceN3'
import ServiceN4 from './modules/ServiceN4'
import Contact from './modules/Contact'

export default function ServicesPage() {
    return (
        <Modules>
            <Hero />
            <ServiceN1 />
            <ServiceN2 />
            <ServiceN3 />
            <ServiceN4 />
            <Contact />
        </Modules>
    )
}
