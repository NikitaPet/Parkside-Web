import Modules from '@containers/ModulesColumn'
import Hero from './modules/Hero'
import Description from './modules/Description'
import Achievements from './modules/Achievements'
import Team from './modules/Team'
import Values from './modules/Values'
import FooterHero from './modules/FooterHero'

export default function Company() {
    return (
        <Modules>
            <Hero />
            <Description />
            <Achievements />
            <Team />
            <Values />
            <FooterHero />
        </Modules>
    )
}
