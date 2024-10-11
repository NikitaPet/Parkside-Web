import Modules from '@containers/ModulesColumn'
import Carousel from './modules/Carousel'
import Clients from './modules/Clients'
import Services from './modules/Services'
import Principles from './modules/Principles'
import HowWeWork from './modules/HowWeWork'
import WorkWith from './modules/WorkWith'
import Reasons from './modules/Reasons'
import Contact from './modules/Contact'

import './styles/page.scss'

export default function Page() {
    return (
        <Modules>
            <Carousel />
            <Clients />
            <Services />
            <Principles />
            <HowWeWork />
            <WorkWith />
            <Reasons />
            <Contact />
        </Modules>
    )
}
