import axios from 'axios'
import Image from 'next/image'
import { FC, useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { useMutation } from 'react-query'
import { Button, TextField, useCreate } from '@/shared'
import { ICreateVideoType } from '../type'

export const CreateVideo: FC<ICreateVideoType> = ({
  callBack = () => null,
}: ICreateVideoType) => {
  const [uploadedFile, setUploadedFile] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const disablesBtn = Boolean(uploadedFile && title && category)
  const URL = 'http://localhost:4200'

  const { mutate } = useMutation({
    mutationFn: () => {
      return axios.post(`${URL}/videos`, {
        id: Math.floor(Math.random()),
        title,
        category,
        likes: 0,
        img: uploadedFile,
        view: 0,
      })
    },
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
    <div>
      <TextField
        type="text"
        placeholder="Название видео"
        callBackFn={(value) => setTitle(value)}
      />
      <TextField
        style="mt-3"
        type="text"
        placeholder="Категория"
        callBackFn={(value) => setCategory(value)}
      />
      <div className="mt-3">
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
      <Button
        disabled={!disablesBtn}
        onClick={() => {
          mutate()
          setCategory('')
          setTitle('')
          setUploadedFile('')
          callBack()
        }}
      >
        Добавить
      </Button>
    </div>
  )
}
