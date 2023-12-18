import { CoffeeType } from '../../../../@types/coffee'
import { useOrder } from '../../../../contexts/OrderContext'
import { CoffeeCartCard } from '../CoffeeCartCard'

export function CoffeeCartList() {
  const { cart } = useOrder()
  return (
    <section>
      {cart.length ? (
        <ul
          className={`flex max-h-[24.6rem] flex-col gap-y-[4.8rem] overflow-x-hidden overflow-y-scroll pr-[0.8rem]`}
        >
          {cart.map((coffee) => (
            <CoffeeCartCard key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      ) : (
        <p
          className={`text-center font-baloo2 text-[1.8rem] leading-[130%] text-gray-800`}
        >
          Carrinho vazio :(
        </p>
      )}
    </section>
  )
}
