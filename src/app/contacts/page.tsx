import Modules from '@containers/ModulesColumn'
import Contacts from './modules/Contacts'
import Map from './modules/Map'

export default function About() {
    return (
        <Modules>
            <Contacts />
            <Map />
        </Modules>
    )
}
