import React, { useContext, createContext } from 'react'
import { header, icons } from 'utils/mocks/land.mock.json'

import { childrenProps } from 'utils/types/GlobalTypes'

export const GlobalContext = createContext({})
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }: childrenProps) => {

  return (
    <GlobalContext.Provider
      value={{
        header,
        icons
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
