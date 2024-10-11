import Modules from '@containers/ModulesColumn'

import Hero from './modules/Hero'
import Offers from './modules/Offers'

import offers from './data/offers.json'

export default function Vacancies() {
    return (
        <Modules>
            <Hero />
            <Offers data={offers} />
        </Modules>
    )
}
