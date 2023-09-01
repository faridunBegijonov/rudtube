export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string)
}

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
