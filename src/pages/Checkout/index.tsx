import { AddressForm } from './components/AddressForm'
import { CheckoutSummary } from './components/CheckoutSummary'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
  return (
    <main className={`containerArea flex pt-[4rem]`}>
      <section className={`flex flex-col gap-y-[1.2rem]`}>
        <h3 className={`font-baloo2 text-[1.8rem] font-bold`}>
          Complete seu pedido
        </h3>
        <AddressForm />
        <PaymentForm />
      </section>
      <CheckoutSummary />
    </main>
  )
}
