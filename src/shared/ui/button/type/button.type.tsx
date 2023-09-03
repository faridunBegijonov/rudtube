import { ReactNode } from 'react'

export interface IButtonType {
  style?: string
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}
