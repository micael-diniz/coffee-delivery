export type AddressType = {
  postalCode: string
  street: string
  number: string
  complement: string
  neighbourhood: string
  city: string
  state: string
}

export type ShippingType = {
  address: AddressType
  value: number
}
