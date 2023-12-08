import { Badge } from '@nextui-org/react'
import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../contexts/OrderContext'

export function Minicart() {
  const navigate = useNavigate()
  const { cart } = useOrder()
  console.log({ cart })
  return (
    <Badge
      content="3"
      className="border-none bg-yellow-700 p-[1rem] text-[1.2rem] font-bold text-white"
    >
      <button
        onClick={() => navigate('/checkout')}
        className="h-[4.5rem] min-w-[3.8rem] rounded-[6px] bg-yellow-100 px-[1.15rem] py-[0.94rem]"
      >
        <ShoppingCart size={22} weight="fill" className="fill-yellow-700" />
      </button>
    </Badge>
  )
}
