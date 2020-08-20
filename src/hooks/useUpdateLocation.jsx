import { useEffect } from 'react'
import { useStores } from './useStores'

export const useUpdateLocation = () => {
  const { mainStore } = useStores()
  useEffect(() => {
    let href = document.location.pathname
    console.log('location: ', href)
    console.log('store: ', mainStore.href)

    if (mainStore.href !== href) {
      mainStore.setRedirect(true)
      mainStore.setHref(href)
    }
  }, [mainStore])

  useEffect(() => {
    mainStore.setMenuActive(false)
  }, [mainStore])
}
