'use client'

import classNames from 'classnames'
// import { useState, useEffect, useRef } from 'react'
import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps'
import { ZoomControl } from '@pbe/react-yandex-maps'

import Module from '@containers/Module'
// import { YMAPS_API_KEY } from '@global/config/environment'
import { mapOptions, modules, controls, initZoom, pointOptions } from './assets/settings'
import { Coords } from './assets/settings'

import styles from './styles/Map.module.scss'

import addresses from './data/addresses.json'

export default function ModuleMap() {
    const office = addresses?.office
    const subway = addresses?.subway
    const route = addresses?.route

    // const [ymaps, setYmaps] = useState(null)
    // const [map, setMap] = useState(null)
    // const mapRef = useRef()

    const officePoint: Coords = office?.point
    const subwayPoint: Coords = subway?.point
    const centerPoint: Coords = [
        (officePoint[0] + subwayPoint[0]) / 2,
        (officePoint[1] + subwayPoint[1]) / 2,
    ]

    const mapData = { center: centerPoint, zoom: initZoom, controls }
    const routeLineCoords: Coords[] = route?.geometry

    // useEffect(() => {
    //     if (ymaps) ymaps.ready(() => setMap(mapRef.current))
    // }, [ymaps])

    return (
        <Module className={styles['wrapper']}>
            <div className={classNames(styles['map-box'])}>
                <YMaps
                    query={{
                        // apikey: YMAPS_API_KEY,
                        load: 'package.full',
                    }}
                >
                    <Map
                        state={mapData}
                        defaultState={mapData}
                        modules={modules}
                        options={mapOptions}
                        style={{ width: '100%', height: '100%' }}
                        // instanceRef={mapRef}
                        // onLoad={(ymaps) => setYmaps(ymaps)}
                    >
                        <Placemark
                            geometry={officePoint}
                            options={pointOptions}
                            properties={{ hintContent: office }}
                        />

                        <Polyline
                            geometry={routeLineCoords}
                            options={{ strokeColor: '#FF3D2E', strokeWidth: 5 }}
                        />

                        <ZoomControl />
                    </Map>
                </YMaps>
            </div>
        </Module>
    )
}
export { ModuleMap as Map }
