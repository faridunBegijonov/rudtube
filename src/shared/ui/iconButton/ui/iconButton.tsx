'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState } from 'react'
import { IIconButtonType } from '../type'

export const IconButton: FC<IIconButtonType> = ({
  children,
  style,
  title,
  isPopup,
}: IIconButtonType) => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const handlePopup = () => {
    setShowPopup((prev) => !prev)
  }
  return (
    <div className="relative">
      <button
        onMouseOver={handlePopup}
        onMouseOut={handlePopup}
        type="button"
        className={`${style} rounded-full p-2 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/10`}
      >
        {children}
      </button>
      <AnimatePresence>
        {isPopup && showPopup && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inline-block p-2 bg-white/50 rounded-[4px] top-[50px] left-[50%] translate-x-[-50%] text-sm"
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
