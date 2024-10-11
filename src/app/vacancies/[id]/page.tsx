import Modules from '@containers/ModulesColumn'

import Hero from './modules/Hero'
import Details from './modules/Details'

import offers from '@app/vacancies/data/offers.json'

export default function Vacancy({ params }) {
    const { id } = params
    const offer = offers.find((offer) => offer?.id === Number(id))
    return (
        <Modules>
            <Hero data={offer} />
            <Details data={offer} />
        </Modules>
    )
}
