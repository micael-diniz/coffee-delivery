import { ShippingType } from '../@types/shipping'

export function getEmptyAddress() {
  return {
    postalCode: '',
    street: '',
    number: '',
    complement: '',
    neighbourhood: '',
    city: '',
    state: '',
  }
}

export const requiredAddressFields: Array<keyof ShippingType['address']> = [
  'postalCode',
  'street',
  'number',
  'neighbourhood',
  'city',
  'state',
]

export function getEmptyPayment() {
  return {
    id: '',
    type: '',
    title: '',
  }
}
