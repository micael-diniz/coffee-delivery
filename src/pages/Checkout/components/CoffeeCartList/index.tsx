import { CoffeeType } from '../../../../@types/coffee'
import { CoffeeCartCard } from '../CoffeeCartCard'

export function CoffeeCartList() {
  const cart: CoffeeType[] = [
    {
      id: 'b5f3a0e7d2',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 990,
      tags: ['tradicional'],
      image: 'https://i.ibb.co/crhZzLs/expresso-tradicional.png',
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
  ]
  return (
    <section>
      <ul className={`flex flex-col gap-y-[2.4rem]`}>
        {cart.map((coffee) => (
          <CoffeeCartCard key={coffee.id} coffee={coffee} />
        ))}
      </ul>
    </section>
  )
}
