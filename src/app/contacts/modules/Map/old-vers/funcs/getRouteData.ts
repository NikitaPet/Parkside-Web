export const getRouteData = async (ymaps, startCoordinates, endCoordinates) => {
    const [from, to] = [startCoordinates, endCoordinates]

    const route = await ymaps.route([from, to], {
        mapStateAutoApply: true,
        routeActiveMarkerVisible: false,
        avoidTrafficJams: true,
        routingMode: 'pedestrian',
        // multiRoute: true,
    })

    const distance = route.getLength() / 1000
    const duration = route.getJamsTime() / 60
    const ways = route.getPaths()
    const way = ways.get(0)
    const segments = way.getSegments()
    const steps = segments.map((segment) => segment.properties.get('boundedBy')).flat()

    const routeData = { route, distance, duration, steps }
    return routeData
}
export default getRouteData
