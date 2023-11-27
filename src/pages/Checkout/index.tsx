import { AddressForm } from './components/AddressForm'
import { CheckoutSummary } from './components/CheckoutSummary'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
  return (
    <main className={`containerArea`}>
      <section>
        <h3>Complete seu pedido</h3>
        <AddressForm />
        <PaymentForm />
      </section>
      <CheckoutSummary />
    </main>
  )
}
