import { FC } from 'react'
import { IButtonType } from '../type'

export const Button: FC<IButtonType> = ({
  style = '',
  children,
  disabled,
  onClick,
}: IButtonType) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style} px-3 py-2 w-full disabled:cursor-no-drop hover:bg-white transition-colors
          hover:text-[#222] border-[1px] border-white/50 border-solid rounded-[4px] cursor-pointer mt-2`}
    >
      {children}
    </button>
  )
}
