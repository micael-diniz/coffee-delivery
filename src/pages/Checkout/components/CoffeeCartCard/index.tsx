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
      <li
        className={`relative flex gap-x-[2rem] px-[0.4rem] py-[0.8rem] after:absolute after:bottom-[-2.4rem] after:h-[0.1rem] after:w-full after:bg-gray-400 after:content-['']`}
      >
        <img
          src={coffee.image}
          alt={coffee.name}
          className={`h-[6.4rem] w-[6.4rem]`}
        />
        <div className={`flex w-full flex-col gap-y-[0.8rem]`}>
          <div className={`flex justify-between`}>
            <h3 className={`text-[1.6rem] leading-[130%] text-gray-800`}>
              {coffee.name}
            </h3>
            <Price
              value={coffee.price}
              priceStyle={`text-gray-700 leading-[130%] text-[1.6rem] font-bold`}
            />
          </div>
          <div className={`flex gap-x-[0.8rem]`}>
            <QuantitySelector containerClass={`ml-0`} />
            <button
              className={`flex items-center gap-x-[0.4rem] rounded-[6px] bg-gray-400 px-[0.8rem] py-[0.65rem] text-[1.2rem] uppercase leading-[160%] text-gray-700`}
            >
              <Trash size={16} className={`text-purple-500`} /> Remover
            </button>
          </div>
        </div>
      </li>
      {/* <div className={`h-[0.1rem] w-full bg-gray-400`} /> */}
    </>
  )
}
