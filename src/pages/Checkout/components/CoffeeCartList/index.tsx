import { Bag } from 'phosphor-react'
import { useOrder } from '../../../../contexts/OrderContext'
import { CoffeeCartCard } from '../CoffeeCartCard'

export function CoffeeCartList() {
  const { cart } = useOrder()
  return (
    <section className={`min-h-[22rem]`}>
      {cart.length ? (
        <ul
          className={`flex max-h-[24.6rem] flex-col gap-y-[4.8rem] overflow-x-hidden overflow-y-scroll pr-[0.8rem]`}
        >
          {cart.map((coffee) => (
            <CoffeeCartCard key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      ) : (
        <div
          className={`flex h-full flex-col items-center justify-center gap-y-[3.2rem]`}
        >
          <Bag size={64} weight="fill" className={`text-yellow-500`} />

          <p
            className={`text-center font-baloo2 text-[2.4rem] leading-[130%] text-gray-800`}
          >
            Carrinho vazio :(
          </p>
        </div>
      )}
    </section>
  )
}
