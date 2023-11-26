type CoffeeTagType =
  | 'tradicional'
  | 'com leite'
  | 'especial'
  | 'alcoólico'
  | 'gelado'

export type CoffeeType = {
  id: string
  image: string
  tags: CoffeeTagType[]
  name: string
  description: string
  price: number
  quantity?: number
}
