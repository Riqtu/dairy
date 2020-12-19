import React, { useEffect, useState } from 'react'
import { PreloaderWrapper, Circle, Container } from './Preloader.styles'
import Bowser from 'bowser'
const Preloader = (props) => {
  const [disActive, setDisactive] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const arr = [...document.body.getElementsByTagName('img')]
    const arrVideo = [...document.body.getElementsByTagName('video')]
    arr.concat(arrVideo)

    const browser = Bowser.getParser(window.navigator.userAgent)
    console.log('safari', browser.getBrowserName())
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

    console.log(browser.getBrowserName() === 'Safari')
    setTimeout(() => {
      browser.getBrowserName() === 'Safari' && setProgress(100)
    }, 3500)
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
      <Container>
        <Circle></Circle>
        <p>{progress}%</p>
      </Container>
    </PreloaderWrapper>
  )
}

export default Preloader
