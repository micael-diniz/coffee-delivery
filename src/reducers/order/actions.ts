import { CoffeeType } from '../../@types/coffee'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
}

type AddItemActionType = {
  type: ActionTypes.ADD_ITEM
  payload: {
    item: CoffeeType
  }
}

export type OrderAction = AddItemActionType

export function addItemAction(item: CoffeeType) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}
