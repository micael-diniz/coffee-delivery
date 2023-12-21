import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
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
  updateAddressValidStateAction,
  updatePaymentMethodAction,
} from '../reducers/order/actions'
import {
  getEmptyAddress,
  getEmptyPayment,
  requiredAddressFields,
} from '../utils'
import { FieldError, ShippingType } from '../@types/shipping'
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
  addressFormErrors: FieldError[]
  updateAddressValidState: (valid: boolean) => void
}

export const OrderContext = createContext({} as OrderContextType)

type OrderContextProviderProps = {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
      cart: [],
      shipping: {
        value: 1000,
        address: getEmptyAddress(),
        valid: true,
        errors: [],
      },
      payment: getEmptyPayment(),
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:order-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

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

  function updateAddressValidState(valid: boolean) {
    dispatch(updateAddressValidStateAction(valid))
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

  const addressFormErrors = useMemo(() => {
    const errors: FieldError[] = []
    requiredAddressFields.forEach((field: keyof ShippingType['address']) => {
      const fieldState = shipping.address[field]
      if (!fieldState.length) {
        errors.push({
          name: field,
          message: 'Campo obrigatório!',
        })
      }

      if (field === 'postalCode' && fieldState.length < 9) {
        errors.push({
          name: field,
          message: 'Campo obrigatório!',
        })
      }

      if (field === 'state' && fieldState.length < 2) {
        errors.push({
          name: field,
          message: 'Campo obrigatório!',
        })
      }
    })
    return errors
  }, [shipping.address])

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState)

    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
  }, [orderState])

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
        addressFormErrors,
        updateAddressValidState,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
