import React, { useEffect, useState } from 'react'
import { PreloaderWrapper, Circle } from './Preloader.styles'

const Preloader = (props) => {
  const [disActive, setDisactive] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const arr = [...document.body.getElementsByTagName('img')]
    const arrVideo = [...document.body.getElementsByTagName('video')]
    arr.concat(arrVideo)
    let counter = 0
    arr.length !== 0
      ? arr.forEach((item) => {
          if (item.nodeName === 'IMG') {
            item.addEventListener('load', () => {
              counter++
              setProgress(Math.floor((counter / arr.length) * 100))
            })
          } else {
            item.addEventListener('canplay', () => {
              counter++
              setProgress(Math.floor((counter / arr.length) * 100))
            })
          }
        })
      : setProgress(100)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        props.setIsLoaded(true)
      }, 500)
      setTimeout(() => {
        setDisactive(true)
      }, 2000)
    }
  }, [props, progress])
  return (
    <PreloaderWrapper
      isLoaded={props.isLoaded}
      disActive={disActive}
      id="preloader"
    >
      <Circle></Circle>
      <p>{progress}%</p>
    </PreloaderWrapper>
  )
}

export default Preloader
