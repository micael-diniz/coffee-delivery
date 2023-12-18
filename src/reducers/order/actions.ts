import { CoffeeType } from '../../@types/coffee'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ONE_ITEM_QUANTITY = 'REMOVE_ONE_ITEM_QUANTITY',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

type AddItemActionType = {
  type: ActionTypes.ADD_ITEM
  payload: {
    item: CoffeeType
  }
}

type RemoveOneItemQuantityActionType = {
  type: ActionTypes.REMOVE_ONE_ITEM_QUANTITY
  payload: {
    id: CoffeeType['id']
  }
}

type RemoveItemActionType = {
  type: ActionTypes.REMOVE_ITEM
  payload: {
    id: CoffeeType['id']
  }
}

export type OrderAction =
  | AddItemActionType
  | RemoveOneItemQuantityActionType
  | RemoveItemActionType

export function addItemAction(item: CoffeeType): AddItemActionType {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}

export function removeOneItemQuantityAction(
  id: CoffeeType['id'],
): RemoveOneItemQuantityActionType {
  return {
    type: ActionTypes.REMOVE_ONE_ITEM_QUANTITY,
    payload: {
      id,
    },
  }
}

export function removeItemAction(id: CoffeeType['id']): RemoveItemActionType {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}
