export const modules = ['geocode']

export const controls = ['zoomControl', 'fullscreenControl']

export const mapOptions = {
    restrictMapArea: [
        [80, 190],
        [-80, 189.9],
    ],
    yandexMapDisablePoiInteractivity: true,
}

export const initZoom = 16

export const pointOptions = {
    iconLayout: 'default#image',
    iconImageHref: '/img/main/contacts/pin-logo.svg',
    iconImageSize: [40, 40],
}

export type Ymaps = React.FC
export type Address = string
export type Coords = [number, number]
