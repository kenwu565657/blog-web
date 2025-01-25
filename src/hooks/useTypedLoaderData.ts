import { useLoaderData as useLoaderDataOriginal } from 'react-router-dom'

interface UseTypedLoaderDataHook {
  <T>():T
}

const useTypedLoaderData: UseTypedLoaderDataHook = () => {
  const useLoaderDataRef = useLoaderDataOriginal as UseTypedLoaderDataHook
  return useLoaderDataRef()
}

export default useTypedLoaderData;