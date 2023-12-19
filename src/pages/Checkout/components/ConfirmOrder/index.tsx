import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  AddressFormSchemaType,
  useCheckout,
} from '../../../../contexts/CheckoutContext'

export function ConfirmOrder() {
  const { handleSubmitAddressForm } = useCheckout()
  const navigate = useNavigate()

  function submitOrder(data: AddressFormSchemaType) {
    console.log({ data })
  }

  const handleSubmitOrder = useCallback(() => {
    handleSubmitAddressForm(submitOrder)()
    // navigate('/checkout/order-placed')
  }, [handleSubmitAddressForm, navigate])

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
