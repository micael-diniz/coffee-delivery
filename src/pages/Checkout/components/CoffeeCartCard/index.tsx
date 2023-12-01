import { Trash } from 'phosphor-react'
import { CoffeeType } from '../../../../@types/coffee'
import { Price } from '../../../../components/Price'
import { QuantitySelector } from '../../../../components/QuantitySelector'

type CoffeeCardCardProps = {
  coffee: CoffeeType
}
export function CoffeeCartCard({ coffee }: CoffeeCardCardProps) {
  return (
    <>
      <li className={`flex gap-x-[2rem] px-[0.4rem] py-[0.8rem]`}>
        <img
          src={coffee.image}
          alt={coffee.name}
          className={`h-[6.4rem] w-[6.4rem]`}
        />
        <div className={`flex w-full flex-col gap-y-[0.8rem]`}>
          <div className={`flex`}>
            <h3>{coffee.name}</h3>
            <Price value={coffee.price} />
          </div>
          <div className={`flex`}>
            <QuantitySelector containerClass={`ml-0`} />
            <button>
              <Trash size={16} /> Remover
            </button>
          </div>
        </div>
      </li>
      <div className={`h-[0.1rem] w-full bg-gray-400`} />
    </>
  )
}
