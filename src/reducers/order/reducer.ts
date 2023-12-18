import { produce } from 'immer'
import { CoffeeType } from '../../@types/coffee'
import { ActionTypes, OrderAction } from './actions'

type OrderState = {
  cart: CoffeeType[]
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

    default:
      return state
  }
}
