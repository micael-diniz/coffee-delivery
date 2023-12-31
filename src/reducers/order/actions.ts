import { CoffeeType } from '../../@types/coffee'
import { PaymentType } from '../../@types/payment'
import { ShippingType } from '../../@types/shipping'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ONE_ITEM_QUANTITY = 'REMOVE_ONE_ITEM_QUANTITY',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_PAYMENT_METHOD = 'UPDATE_PAYMENT_METHOD',
  UPDATE_ADDRESS_FIELD = 'UPDATE_ADDRESS_FIELD',
  UPDATE_ADDRESS_VALID_STATE = 'UPDATE_ADDRESS_VALID_STATE',
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

type UpdatePaymentMethodActionType = {
  type: ActionTypes.UPDATE_PAYMENT_METHOD
  payload: {
    payment: PaymentType
  }
}

type UpdateAddressFieldActionType = {
  type: ActionTypes.UPDATE_ADDRESS_FIELD
  payload: {
    name: keyof ShippingType['address']
    value: string
  }
}

type UpdateAddressValidStateActionType = {
  type: ActionTypes.UPDATE_ADDRESS_VALID_STATE
  payload: {
    valid: boolean
  }
}

export type OrderAction =
  | AddItemActionType
  | RemoveOneItemQuantityActionType
  | RemoveItemActionType
  | UpdatePaymentMethodActionType
  | UpdateAddressFieldActionType
  | UpdateAddressValidStateActionType

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

export function updatePaymentMethodAction(
  payment: PaymentType,
): UpdatePaymentMethodActionType {
  return {
    type: ActionTypes.UPDATE_PAYMENT_METHOD,
    payload: {
      payment,
    },
  }
}

export function updateAddressFieldAction(
  name: keyof ShippingType['address'],
  value: string,
): UpdateAddressFieldActionType {
  return {
    type: ActionTypes.UPDATE_ADDRESS_FIELD,
    payload: {
      name,
      value,
    },
  }
}

export function updateAddressValidStateAction(
  valid: boolean,
): UpdateAddressValidStateActionType {
  return {
    type: ActionTypes.UPDATE_ADDRESS_VALID_STATE,
    payload: {
      valid,
    },
  }
}
