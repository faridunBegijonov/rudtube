export interface ITextField {
  type: string
  placeholder: string
  style?: string
  icon?: boolean
  callBackFn: (value: string) => void
}
