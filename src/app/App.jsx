import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import store, { Provider } from '@/store'
import { setData } from '@/store/slices'
import TableWindow from './TableWindow'

import '@global/styles/global-styles.scss'
import styles from './styles/App.module.scss'

import points from 'database/mock/points.json'

export default function App() {
    return (
        <Provider store={store}>
            <Content />
        </Provider>
    )
}

export function Content() {
    const dispatch = useDispatch()

    useEffect(() => {
        const action = setData(points)
        if (points) dispatch(action)
    }, [points])

    return (
        <div className={styles.wrapper}>
            <TableWindow />
        </div>
    )
}
