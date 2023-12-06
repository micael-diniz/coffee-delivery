import { Price } from '../../../../components/Price'

export function TotalItems() {
  return (
    <p className={`flex justify-between`}>
      <span className={`text-[1.4rem] leading-[130%] text-gray-700`}>
        Total de itens
      </span>
      <span>
        <Price
          value={2970}
          priceStyle={`text-[1.6rem] text-gray-700 leading-[130%]`}
        />
      </span>
    </p>
  )
}
