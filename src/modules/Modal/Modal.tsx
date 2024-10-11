'use client'

import Wrapper from 'react-modal'
import classNames from 'classnames'
import React, { useState, useEffect } from 'react'
import useMediaQuery from 'global/hooks/useMediaQuery'
import useDisableScroll from 'global/hooks/useDisableScroll'

import WindowModal from './WindowModal'
import SwipeModal from './SwipeModal'

import styles from './styles/Modal.module.scss'

const availableModals = { window: WindowModal, swipe: SwipeModal }

export default function CustomModal({
    children,
    isModalOpen,
    setModalOpen,
    type,
    callbackControl = (control) => control,
}: Props) {
    const [modalComponents, setModalComponents] = useState(null)
    const [isInitialized, setInitialized] = useState(false)
    const [isOverlayHidden, setOverlayHidden] = useState(true)
    const isDesktopMode = useMediaQuery('desktop')
    const disableScroll = useDisableScroll()

    const DefaultModal = isDesktopMode ? WindowModal : SwipeModal
    const Modal = availableModals[type] || DefaultModal

    const windowClosingDelay = overlayHidingDurationInMS
    const closeModal = () => {
        setOverlayHidden(true)
        setTimeout(() => setModalOpen(false), windowClosingDelay)
    }

    useEffect(() => {
        if (isInitialized) disableScroll(isModalOpen)
        return () => {
            if (isInitialized) disableScroll(false)
        }
    }, [isModalOpen])

    useEffect(() => {
        setInitialized(true)
    }, [])

    return (
        <Wrapper
            isOpen={isModalOpen}
            ariaHideApp={false} // close
            shouldCloseOnOverlayClick={false}
            onAfterOpen={() => setOverlayHidden(false)}
            className={styles.modal}
            overlayClassName={classNames(styles.overlay, {
                [styles.hidden]: isOverlayHidden,
            })}
        >
            <Modal
                {...{
                    isModalOpen,
                    closeModal,
                    overlayHidingDurationInMS,
                    callbackControl,
                    modalComponents,
                    setModalComponents,
                }}
            >
                {children}
            </Modal>
        </Wrapper>
    )
}
export { CustomModal as Modal }

export const overlayHidingDurationInMS = Number(styles['hiding-duration-ms'])

type Props = {
    children: React.ReactNode
    isModalOpen: boolean
    setModalOpen: (state: boolean) => any | void
    type?: string
    callbackControl?: (control?: any) => any | void
}
