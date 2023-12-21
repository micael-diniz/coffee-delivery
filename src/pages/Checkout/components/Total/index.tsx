import { Price } from '../../../../components/Price'
import { useOrder } from '../../../../contexts/OrderContext'

export function Total() {
  const { itemsTotal, shipping } = useOrder()
  const total = itemsTotal + shipping.value
  return (
    <div className={`flex justify-between`}>
      <span className={`text-[2rem] font-bold leading-[130%] text-gray-800`}>
        Total
      </span>
      <span>
        <Price
          value={total}
          priceStyle={`text-[2rem] font-bold leading-[130%] text-gray-800`}
        />
      </span>
    </div>
  )
}
