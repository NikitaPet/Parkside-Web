'use client'

import { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps'
import { ZoomControl } from '@pbe/react-yandex-maps'
// import { RouteEditor, RouteButton } from '@pbe/react-yandex-maps'

import useDebounce from '@global-hooks/useDebounce'
import Module from '@containers/Module'
import { YMAPS_API_KEY } from '@global/config/environment'
import { mapOptions, modules, controls, initZoom, pointOptions } from './assets/settings'
import { Address, Coords } from './assets/settings'

import getPointData from './funcs/getPointData'
import getRouteData from './funcs/getRouteData'

import styles from './styles/Map.module.scss'

import addresses from './data/addresses.json'

export default function ModuleMap() {
    const officeAddress: Address = addresses?.office
    const subwayAddress: Address = addresses?.subway

    const [ymaps, setYmaps] = useState(null)
    const [map, setMap] = useState(null)
    const mapRef = useRef()

    const [data, setData] = useState({ office: null, subway: null, route: null })
    const { office, subway, route } = data

    const updatePointData: (address: Address, pointName: string) => void = useDebounce(
        async (address: Address, pointName: string) => {
            try {
                data[pointName] = await getPointData(ymaps, address)
                setData({ ...data })
            } catch (error) {}
        },
        1000,
        [ymaps, map],
    )

    const updateRouteData: (startCoordinates: Coords, endCoordinates: Coords) => void = useDebounce(
        async (startCoords: Coords, endCoords: Coords) => {
            try {
                const routeData = await getRouteData(ymaps, startCoords, endCoords)
                data['route'] = routeData
                setData({ ...data })
                map.geoObjects.add(routeData.route)
            } catch (error) {}
        },
        1000,
        [ymaps, map],
    )

    const officePoint: Coords = office?.point || [0, 0]
    const subwayPoint: Coords = subway?.point || [0, 0]
    const mapData = { center: officePoint, zoom: initZoom, controls }
    const routeLineCoords: [number, number][] = route?.steps

    useEffect(() => {
        if (ymaps) ymaps.ready(() => setMap(mapRef.current))
    }, [ymaps])

    useEffect(() => {
        if (!map) return
        if (!office) updatePointData(officeAddress, 'office')
        else if (!subway) updatePointData(subwayAddress, 'subway')
        else if (!route) updateRouteData(officePoint, subwayPoint)
    }, [ymaps, map, data])

    return (
        <Module className={styles['wrapper']}>
            <div className={classNames(styles['map-box'])}>
                <YMaps query={{ apikey: YMAPS_API_KEY, load: 'package.full' }}>
                    <Map
                        state={mapData}
                        defaultState={mapData}
                        modules={modules}
                        options={mapOptions}
                        onLoad={(ymaps) => setYmaps(ymaps)}
                        //
                        instanceRef={mapRef}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Placemark
                            geometry={officePoint}
                            options={pointOptions}
                            properties={{ hintContent: office }}
                        />

                        {routeLineCoords && (
                            <Polyline
                                geometry={routeLineCoords}
                                options={{ strokeColor: '#FF3D2E', strokeWidth: 5 }}
                            />
                        )}

                        {/* <RouteEditor /> */}
                        {/* <RouteButton options={{ float: 'right' }} /> */}
                        <ZoomControl />
                    </Map>
                </YMaps>
            </div>
        </Module>
    )
}
export { ModuleMap as Map }
