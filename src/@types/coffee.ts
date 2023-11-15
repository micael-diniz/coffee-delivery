type CoffeeTagType =
  | 'tradicional'
  | 'com leite'
  | 'especial'
  | 'alcoólico'
  | 'gelado'

export type CoffeeType = {
  id: string
  image: unknown
  tags: CoffeeTagType[]
  name: string
  description: string
  price: number
  quantity?: number
}
