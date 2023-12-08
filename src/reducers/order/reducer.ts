import { CoffeeType } from '../../@types/coffee'
import { ActionTypes, OrderAction } from './actions'

type OrderState = {
  cart: CoffeeType[]
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
