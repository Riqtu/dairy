import React from 'react'
import { MainStore } from '../stores'

export const storesContext = React.createContext({
  mainStore: new MainStore(),
})
