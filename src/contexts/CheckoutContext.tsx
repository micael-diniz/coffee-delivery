import { ReactNode, createContext, useContext } from 'react'

type CheckoutContextProps = {}

type CheckoutProviderProps = {
  children: ReactNode
}
const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  return (
    <CheckoutContext.Provider value={{}}>{children}</CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)
