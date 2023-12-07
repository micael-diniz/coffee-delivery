import { ActionTypes, OrderAction } from './actions'

type OrderState = {
  cart: unknown[]
}

export function orderReducer(state: OrderState, action: OrderAction) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      return state
    }
    default:
      return state
  }
}
