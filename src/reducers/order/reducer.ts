import { produce } from 'immer'
import { CoffeeType } from '../../@types/coffee'
import { ActionTypes, OrderAction } from './actions'
import { ShippingType } from '../../@types/shipping'
import { PaymentType } from '../../@types/payment'

type OrderState = {
  cart: CoffeeType[]
  shipping: ShippingType
  payment: PaymentType
}

export function orderReducer(state: OrderState, action: OrderAction) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const { item } = action.payload

      const itemIndexInCart = state.cart.findIndex((i) => i.id === item.id)

      if (itemIndexInCart === -1) {
        return produce(state, (draft) => {
          draft.cart.push(item)
        })
      }

      return produce(state, (draft) => {
        const itemToUpdate = draft.cart[itemIndexInCart]
        if (!itemToUpdate.quantity) {
          itemToUpdate.quantity = 1
        } else {
          itemToUpdate.quantity += item.quantity as number
        }
        draft.cart[itemIndexInCart] = itemToUpdate
      })
    }

    case ActionTypes.REMOVE_ONE_ITEM_QUANTITY: {
      const { id } = action.payload
      const itemIndexInCart = state.cart.findIndex((i) => i.id === id)
      if (itemIndexInCart === -1) return state

      return produce(state, (draft) => {
        const itemToUpdate = draft.cart[itemIndexInCart]
        if (itemToUpdate.quantity && itemToUpdate.quantity > 1) {
          itemToUpdate.quantity -= 1
        }
        draft.cart[itemIndexInCart] = itemToUpdate
      })
    }

    case ActionTypes.REMOVE_ITEM: {
      const { id } = action.payload
      const itemIndexInCart = state.cart.findIndex((i) => i.id === id)
      if (itemIndexInCart === -1) return state
      return produce(state, (draft) => {
        draft.cart.splice(itemIndexInCart, 1)
      })
    }

    case ActionTypes.UPDATE_PAYMENT_METHOD: {
      return produce(state, (draft) => {
        draft.payment = action.payload.payment
      })
    }

    case ActionTypes.UPDATE_ADDRESS_FIELD: {
      return produce(state, (draft) => {
        const { name, value } = action.payload
        draft.shipping.address[name] = value
      })
    }

    case ActionTypes.UPDATE_ADDRESS_VALID_STATE: {
      return produce(state, (draft) => {
        const { valid } = action.payload
        draft.shipping.valid = valid
      })
    }

    default:
      return state
  }
}
