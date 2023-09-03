import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'
import { IModalType } from '../type'

export const Modal: FC<IModalType> = ({
  isOpen,
  title,
  onClose,
  childrenModal,
  width,
}: IModalType) => {
  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-[101] flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`${width} rounded-[8px] bg-[#0f0f0fff] px-6 py-4`}
            >
              <h1 className="font-bold text-xl mb-4">{title}</h1>
              {childrenModal}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
