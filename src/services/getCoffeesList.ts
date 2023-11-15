import { CoffeeType } from '../@types/coffee'

const coffeeList: CoffeeType[] = [
  {
    id: 'b5f3a0e7d2',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    tags: ['tradicional'],
    image: 'https://i.ibb.co/crhZzLs/expresso-tradicional.png',
  },
  {
    id: '8c1e9b4ad6',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    tags: ['tradicional'],
    image: 'https://i.ibb.co/19pT8ck/expresso-americano.png',
  },
  {
    id: '2f7c6e5d8a',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    tags: ['tradicional'],
    image: 'https://i.ibb.co/5RJxYkb/expresso-cremoso.png',
  },
  {
    id: '9d3b2a4c6f',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
    tags: ['tradicional', 'gelado'],
    image: 'https://i.ibb.co/PDCXtNm/expresso-gelado.png',
  },
  {
    id: '7e5a1c3b9d',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 990,
    tags: ['tradicional', 'com leite'],
    image: 'https://i.ibb.co/kqhmX0G/cafe-com-leite.png',
  },
  {
    id: '4b8d6f2c1e',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    tags: ['tradicional', 'com leite'],
    image: 'https://i.ibb.co/gDpccbQ/latte.png',
  },
  {
    id: '1a9c7b3d5f',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 990,
    tags: ['tradicional', 'com leite'],
    image: 'https://i.ibb.co/vkHY8qb/capuccino.png',
  },
  {
    id: '6e2f4d9c7b',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
    tags: ['tradicional', 'com leite'],
    image: 'https://i.ibb.co/hLzZJvG/macchiato.png',
  },
  {
    id: '3c8a5b9d1e',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 990,
    tags: ['tradicional', 'com leite'],
    image: 'https://i.ibb.co/gmmW2hK/mocaccino.png',
  },
  {
    id: 'fd2c8b6a9e',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    tags: ['especial', 'com leite'],
    image: 'https://i.ibb.co/KmNtg15/chocolate-quente.png',
  },
  {
    id: 'b4d8e7f3a1',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: 'https://i.ibb.co/DpgwfyM/cubano.png',
  },
  {
    id: '7a5d2b4c9f',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    tags: ['especial'],
    image: 'https://i.ibb.co/bdyKBzK/havaiano.png',
  },
  {
    id: '3e6a7d4b1f',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
    tags: ['especial'],
    image: 'https://i.ibb.co/ckzBMh3/arabe.png',
  },
  {
    id: '5c9b8d2f4e',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 990,
    tags: ['especial', 'alcoólico'],
    image: 'https://i.ibb.co/qyyQSrq/irlandes.png',
  },
]

export function getCoffeesList(): CoffeeType[] {
  return coffeeList
}
