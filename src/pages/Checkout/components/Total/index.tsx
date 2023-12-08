import { Price } from '../../../../components/Price'

export function Total() {
  return (
    <div className={`flex justify-between`}>
      <span className={`text-[2rem] font-bold leading-[130%] text-gray-800`}>
        Total
      </span>
      <span>
        <Price
          value={3320}
          priceStyle={`text-[2rem] font-bold leading-[130%] text-gray-800`}
        />
      </span>
    </div>
  )
}
