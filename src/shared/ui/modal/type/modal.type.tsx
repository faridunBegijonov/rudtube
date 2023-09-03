import { ReactElement } from 'react'

export interface IModalType {
  isOpen: boolean
  onClose: () => void
  title: string
  childrenModal: ReactElement
  width: string
}
