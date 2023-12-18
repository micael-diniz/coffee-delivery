import { Link, useNavigate } from 'react-router-dom'

export function ConfirmOrder() {
  const navigate = useNavigate()
  return (
    <>
      <button
        onClick={() => navigate('/checkout/order-placed')}
        className={`rounded-[6px] bg-yellow-500 px-[0.8rem] py-[1.2rem] text-[1.4rem] font-bold uppercase text-white`}
      >
        Confirmar pedido
      </button>
      <Link
        to={'/'}
        className={`text-center text-[1.4rem] leading-[130%] text-gray-700 underline`}
      >
        Continuar comprando
      </Link>
    </>
  )
}
