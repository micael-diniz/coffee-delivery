import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useOrder } from '../../../../contexts/OrderContext'

export function ConfirmOrder() {
  const navigate = useNavigate()
  const { addressFormErrors, updateAddressValidState } = useOrder()

  const handleSubmitOrder = useCallback(() => {
    if (addressFormErrors.length > 0) {
      updateAddressValidState(false)
    } else {
      navigate('/checkout/order-placed')
    }
  }, [addressFormErrors.length, navigate, updateAddressValidState])

  return (
    <>
      <button
        onClick={handleSubmitOrder}
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
