import { AddressForm } from './components/AddressForm'
import { CheckoutSummary } from './components/CheckoutSummary'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
  return (
    <main
      className={`containerArea flex flex-col items-center justify-between gap-y-[2.4rem] py-[4rem] lg:flex-row lg:items-start`}
    >
      <section className={`flex w-full flex-col gap-y-[1.2rem] lg:w-[57%]`}>
        <h3 className={`font-baloo2 text-[1.8rem] font-bold leading-[130%]`}>
          Complete seu pedido
        </h3>
        <AddressForm />
        <PaymentForm />
      </section>
      <CheckoutSummary />
    </main>
  )
}
