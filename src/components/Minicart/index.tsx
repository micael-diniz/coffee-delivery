import { Badge } from '@nextui-org/react'
import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../contexts/OrderContext'
import { useMemo } from 'react'

export function Minicart() {
  const navigate = useNavigate()
  const { cart } = useOrder()

  const totalQuantity = useMemo(
    () =>
      cart.reduce((acc, { quantity }) => {
        if (!quantity) return 0

        return acc + quantity
      }, 0),
    [cart],
  )

  return totalQuantity > 0 ? (
    <Badge
      content={totalQuantity}
      className="right-[1.6rem] h-[2.4rem] w-[2.4rem] border-none bg-yellow-700 text-[1.2rem] font-bold text-white"
    >
      <button
        onClick={() => navigate('/checkout')}
        className="h-[4.5rem] min-w-[3.8rem] rounded-[6px] bg-yellow-100 px-[1.15rem] py-[0.94rem]"
      >
        <ShoppingCart size={22} weight="fill" className="fill-yellow-700" />
      </button>
    </Badge>
  ) : (
    <button
      onClick={() => navigate('/checkout')}
      className="h-[4.5rem] min-w-[3.8rem] rounded-[6px] bg-yellow-100 px-[1.15rem] py-[0.94rem]"
    >
      <ShoppingCart size={22} weight="fill" className="fill-yellow-700" />
    </button>
  )
}
