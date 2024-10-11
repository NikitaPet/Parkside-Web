import { Golos_Text } from 'next/font/google'

const Golos = Golos_Text({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-golos',
    display: 'swap',
    adjustFontFallback: false,
})

export default Golos
export { Golos }
