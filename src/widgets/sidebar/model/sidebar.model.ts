import { AiFillLike } from 'react-icons/ai'
import { BiSolidVideos } from 'react-icons/bi'
import { FaClock } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { IItemType } from '../type'

export const sidebarModel: IItemType[] = [
  {
    Icon: GoHomeFill,
    title: 'Главная',
    href: '/',
  },
  {
    Icon: BiSolidVideos,
    title: 'Библиотека',
    href: '/library',
  },
  {
    Icon: FaClock,
    title: 'История',
    href: '/history',
  },
  {
    Icon: AiFillLike,
    title: 'Понравившиеся',
    href: '/likes',
  },
  {
    Icon: FaClock,
    title: 'Смотреть позже',
    href: '/view-later',
  },
]
