'use client'
import { atob } from 'buffer'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import { TextField, useCreate } from '@/shared'

export default function Page() {
  const [uploadedFile, setUploadedFile] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const disablesBtn = Boolean(uploadedFile && title && category)
  const added = useCreate({
    id: Math.random(),
    title,
    category,
    likes: 0,
    img: uploadedFile,
    view: 0,
  })

  const notify = (title: string) =>
    toast(title, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      rtl: false,
      theme: 'dark',
    })

  const base64FileURL = (element: Blob, callback: (e: any) => void) => {
    let file = element
    let reader = new window.FileReader()
    reader.onloadend = function (e) {
      callback(e.target?.result)
    }
    reader.readAsDataURL(file)
  }

  const handleFileChange = (file: Blob) => {
    base64FileURL(file, (obj: string) => {
      setUploadedFile(obj)
    })
  }

  return (
    <div className="mt-4 md:mt-8">
      <h1 className="font-bold text-xl">Добавить видео в RudTube</h1>
      <div className="w-full md:mx-auto  md:w-[50%] mt-5">
        <TextField
          type="text"
          placeholder="Название видео"
          callBackFn={(value) => setTitle(value)}
        />
        <TextField
          style="mt-5"
          type="text"
          placeholder="Категория"
          callBackFn={(value) => setCategory(value)}
        />
        <div className="mt-5">
          <label htmlFor="upload-design">
            {uploadedFile ? (
              <Image
                src={uploadedFile}
                alt={uploadedFile}
                width={500}
                height={350}
                className="w-full h-[250px] md:h-[350px]"
              />
            ) : (
              <div className="w-full h-[250px] md:h-[350px] cursor-pointer border-[2px] border-white/50 border-dashed rounded-[4px] flex items-center justify-center">
                Выберите абложку{' '}
                <AiOutlineDownload
                  style={{ fontSize: '30px', marginLeft: '8px' }}
                />
              </div>
            )}
          </label>
          <input
            id="upload-design"
            type="file"
            onChange={(e: any) => handleFileChange(e.target.files[0])}
            hidden={true}
          />
        </div>
        <button
          disabled={!disablesBtn}
          onClick={() => {
            // added.mutate()
            notify('Успешно добавлено')
            setCategory('')
            setTitle('')
            setUploadedFile('')
          }}
          className="px-3 py-2 w-full disabled:cursor-no-drop hover:bg-white transition-colors
          hover:text-[#222] border-[1px] border-white/50 border-solid rounded-[4px] cursor-pointer mt-2"
        >
          Добавить
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}
