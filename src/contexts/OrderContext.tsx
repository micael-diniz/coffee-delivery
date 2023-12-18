import { ReactNode, createContext, useContext, useReducer } from 'react'
import { orderReducer } from '../reducers/order/reducer'
import { CoffeeType } from '../@types/coffee'
import {
  addItemAction,
  removeItemAction,
  removeOneItemQuantityAction,
} from '../reducers/order/actions'

interface OrderContextType {
  cart: CoffeeType[]
  addItemToCart: (item: CoffeeType) => void
  removeOneItemQuantity: (id: CoffeeType['id']) => void
  removeItem: (id: CoffeeType['id']) => void
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

  function addItemToCart(item: CoffeeType) {
    dispatch(addItemAction(item))
  }

  function removeOneItemQuantity(id: CoffeeType['id']) {
    dispatch(removeOneItemQuantityAction(id))
  }

  function removeItem(id: CoffeeType['id']) {
    dispatch(removeItemAction(id))
  }

  return (
    <OrderContext.Provider
      value={{
        cart,
        addItemToCart,
        removeOneItemQuantity,
        removeItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
