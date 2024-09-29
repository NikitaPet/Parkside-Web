import { useState } from 'react'
import getDate from 'date-and-time'
import { useSelector } from 'react-redux'
import { getData } from '@/store/selectors'

import AppealDescription from './Modals/AppealDescription'
import { TypeTableCell, StatusTableCell } from './components'
import { TableTitle, TableCell } from './components'
import { QueryMessage } from './components'

import sortList from './funcs/sortList'

import styles from './styles/App.module.scss'

export default function Table() {
    const data = useSelector(getData)
    const list = data?.list
    const isListReady = !!list && Array.isArray(list)

    const [sort, setSort] = useState('')

    const sortedList = isListReady ? sortList(list, sort) : []

    return (
        <div className={styles['table-window']}>
            <div className={styles['table']}>
                <div className={styles['table-titles']}>
                    <div className={styles['table-titles-row']}>
                        <TableTitle {...{ sort, setSort }} name={'date'}>
                            Дата
                        </TableTitle>
                        <TableTitle {...{ sort, setSort }} name={'autor'}>
                            Автор
                        </TableTitle>
                        <TableTitle {...{ sort, setSort }} name={'description'}>
                            Описание
                        </TableTitle>
                        <TableTitle {...{ sort, setSort }} name={'type'}>
                            Тип
                        </TableTitle>
                        <TableTitle {...{ sort, setSort }} name={'status'}>
                            Статус
                        </TableTitle>
                    </div>
                </div>

                <div className={styles['table-content']}>
                    {isListReady &&
                        sortedList.map((data, i) => (
                            <TableContentRow
                                {...{ data }}
                                key={i + JSON.stringify(data)}
                            />
                        ))}

                    {!isListReady && (
                        <QueryMessage>{'Загрузка...'}</QueryMessage>
                    )}
                </div>
            </div>
        </div>
    )
}
export { Table }

function TableContentRow({ data }) {
    const [isAppealDescriptionOpen, setAppealDescriptionOpen] = useState()

    const date = new Date(data?.date)
    const isDateValid = !isNaN(Date.parse(data?.date))
    const formatDate = isDateValid
        ? getDate.format(date, 'DD.MM.YYYY')
        : 'Неизвестная дата'

    return (
        <>
            <div
                className={styles['table-content-row']}
                onClick={() => setAppealDescriptionOpen(true)}
            >
                <TableCell>{formatDate}</TableCell>
                <TableCell>{data?.autor}</TableCell>
                <TableCell className={styles.description}>
                    {data?.description}
                </TableCell>
                <TypeTableCell type={data?.type} />
                <StatusTableCell status={data?.status} />
            </div>

            <AppealDescription
                appealData={data}
                formatDate={formatDate}
                {...{ isAppealDescriptionOpen, setAppealDescriptionOpen }}
            />
        </>
    )
}
