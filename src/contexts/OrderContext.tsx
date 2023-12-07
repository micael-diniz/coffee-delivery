import { ReactNode, createContext, useReducer } from 'react'
import { orderReducer } from '../reducers/order/reducer'

interface OrderContextType {
  cart: unknown[]
}

export const OrderContext = createContext({} as OrderContextType)

type OrderContextProviderProps = {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    cart: [],
  })

  const { cart } = orderState

  console.log({ dispatch })
  return (
    <OrderContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
