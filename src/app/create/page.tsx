'use client'

import { CreateVideo } from '@/features'

export default function Page() {
  return (
    <div className="mt-4 p-4 md:mt-8">
      <h1 className="font-bold text-xl">Добавить видео в RudTube</h1>
      <div className="w-full md:mx-auto  md:w-[50%] mt-5">
        <CreateVideo />
      </div>
    </div>
  )
}
