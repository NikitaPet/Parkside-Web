import Modules from '@containers/ModulesColumn'
import Hero from './modules/Hero'
import WorkTogether from './modules/WorkTogether'
import Profit from './modules/Profit'
import Expectations from './modules/Expectations'
import Award from './modules/Award'
import Calculation from './modules/Calculation'
import Explanation from './modules/Explanation'
import Contact from './modules/Contact'

export default function About() {
    return (
        <Modules>
            <Hero />
            <WorkTogether />
            <Profit />
            <Expectations />
            <Award />
            <Calculation />
            <Explanation />
            <Contact />
        </Modules>
    )
}
