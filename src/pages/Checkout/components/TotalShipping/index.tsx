import { Price } from '../../../../components/Price'
import { useOrder } from '../../../../contexts/OrderContext'

export function TotalShipping() {
  const { shipping } = useOrder()
  return (
    <div className={`flex justify-between`}>
      <span className={`text-[1.4rem] leading-[130%] text-gray-700`}>
        Entrega
      </span>
      <span>
        <Price
          value={shipping.value}
          priceStyle={`text-[1.6rem] text-gray-700 leading-[130%]`}
        />
      </span>
    </div>
  )
}
