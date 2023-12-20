import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react'
import { orderReducer } from '../reducers/order/reducer'
import { CoffeeType } from '../@types/coffee'
import {
  addItemAction,
  removeItemAction,
  removeOneItemQuantityAction,
  updateAddressFieldAction,
  updatePaymentMethodAction,
} from '../reducers/order/actions'
import { getEmptyAddress, getEmptyPayment } from '../utils'
import { ShippingType } from '../@types/shipping'
import { PaymentType } from '../@types/payment'

interface OrderContextType {
  cart: CoffeeType[]
  addItemToCart: (item: CoffeeType) => void
  removeOneItemQuantity: (id: CoffeeType['id']) => void
  removeItem: (id: CoffeeType['id']) => void
  itemsTotal: number
  shipping: ShippingType
  updatePaymentMethod: (payment: PaymentType) => void
  payment: PaymentType
  updateAddressField: (
    name: keyof ShippingType['address'],
    value: string,
  ) => void
}

export const OrderContext = createContext({} as OrderContextType)

type OrderContextProviderProps = {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    cart: [],
    shipping: {
      value: 0,
      address: getEmptyAddress(),
    },
    payment: getEmptyPayment(),
  })

  const { cart, shipping, payment } = orderState

  function addItemToCart(item: CoffeeType) {
    dispatch(addItemAction(item))
  }

  function removeOneItemQuantity(id: CoffeeType['id']) {
    dispatch(removeOneItemQuantityAction(id))
  }

  function removeItem(id: CoffeeType['id']) {
    dispatch(removeItemAction(id))
  }

  function updatePaymentMethod(payment: PaymentType) {
    dispatch(updatePaymentMethodAction(payment))
  }

  function updateAddressField(
    name: keyof ShippingType['address'],
    value: string,
  ) {
    dispatch(updateAddressFieldAction(name, value))
  }

  const itemsTotal = useMemo(
    () =>
      cart.reduce((acc, { quantity, price }) => {
        if (quantity) {
          return acc + quantity * price
        }
        return acc + price
      }, 0),
    [cart],
  )
  return (
    <OrderContext.Provider
      value={{
        cart,
        addItemToCart,
        removeOneItemQuantity,
        removeItem,
        itemsTotal,
        shipping,
        updatePaymentMethod,
        payment,
        updateAddressField,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
