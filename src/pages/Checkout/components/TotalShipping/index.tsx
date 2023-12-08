import { Price } from '../../../../components/Price'

export function TotalShipping() {
  return (
    <div className={`flex justify-between`}>
      <span className={`text-[1.4rem] leading-[130%] text-gray-700`}>
        Entrega
      </span>
      <span>
        <Price
          value={350}
          priceStyle={`text-[1.6rem] text-gray-700 leading-[130%]`}
        />
      </span>
    </div>
  )
}
