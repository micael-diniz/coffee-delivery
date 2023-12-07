export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
}

type AddItemActionType = {
  type: ActionTypes.ADD_ITEM
  payload: {
    item: unknown
  }
}

export type OrderAction = AddItemActionType

export function addItemAction(item: unknown) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}
