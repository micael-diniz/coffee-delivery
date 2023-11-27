import { ShoppingCart } from 'phosphor-react'
import { CoffeeType } from '../../../../@types/coffee'
import { Price } from '../../../../components/Price'
import { QuantitySelector } from '../../../../components/QuantitySelector'

type CoffeeCardProps = {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <li
      className={`flex max-h-[33rem] max-w-[25.6rem] flex-col items-center gap-y-[0.8rem] rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] bg-gray-200 px-[2.4rem] pb-[2rem]`}
    >
      <img
        src={coffee.image}
        alt={coffee.name}
        className={`mt-[-2rem] max-w-[12rem]`}
      />
      <div className={`mt-[0.4rem] flex gap-x-[0.4rem]`}>
        {coffee.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-[100px] bg-yellow-100 px-[0.8rem] py-[0.4rem] font-roboto text-[1rem] font-bold uppercase text-yellow-700`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p
        className={`mt-[0.8rem] font-baloo2 text-[2rem] font-bold text-gray-800`}
      >
        {coffee.name}
      </p>
      <p className={`text-center text-[1.35rem] text-gray-600 `}>
        {coffee.description}
      </p>
      <div className={`mt-[2.5rem] flex w-full items-center gap-x-[0.8rem]`}>
        <Price
          value={coffee.price}
          valueStyle="text-[2.4rem] font-baloo2 font-extrabold"
        />
        <QuantitySelector />
        <button className={`rounded-[6px] bg-purple-700 p-[0.8rem]`}>
          <ShoppingCart size={22} weight="fill" className="fill-gray-200" />
        </button>
      </div>
    </li>
  )
}
