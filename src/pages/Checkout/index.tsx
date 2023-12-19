import { CheckoutProvider } from '../../contexts/CheckoutContext'
import { AddressForm } from './components/AddressForm'
import { CheckoutSummary } from './components/CheckoutSummary'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
  return (
    <CheckoutProvider>
      <main className={`containerArea flex justify-between py-[4rem]`}>
        <section className={`flex w-[57%] flex-col gap-y-[1.2rem]`}>
          <h3 className={`font-baloo2 text-[1.8rem] font-bold leading-[130%]`}>
            Complete seu pedido
          </h3>
          <AddressForm />
          <PaymentForm />
        </section>
        <CheckoutSummary />
      </main>
    </CheckoutProvider>
  )
}
