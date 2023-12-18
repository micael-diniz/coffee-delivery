import { useMemo } from 'react'
import { Price } from '../../../../components/Price'
import { useOrder } from '../../../../contexts/OrderContext'

export function TotalItems() {
  const { cart } = useOrder()

  const itemsTotal = useMemo(
    () =>
      cart.reduce((acc, { quantity, price }) => {
        if (quantity) {
          return acc + quantity * price
        }
        return acc + price
      }, 0),
    [cart],
  )
  return (
    <div className={`flex justify-between`}>
      <span className={`text-[1.4rem] leading-[130%] text-gray-700`}>
        Total de itens
      </span>
      <span>
        <Price
          value={itemsTotal}
          priceStyle={`text-[1.6rem] text-gray-700 leading-[130%]`}
        />
      </span>
    </div>
  )
}
