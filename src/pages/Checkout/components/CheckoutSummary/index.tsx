import { CoffeeCartList } from '../CoffeeCartList'
import { ConfirmOrder } from '../ConfirmOrder'
import { TotalSummary } from '../TotalSummary'

export function CheckoutSummary() {
  return (
    <aside>
      <CoffeeCartList />
      <TotalSummary />
      <ConfirmOrder />
    </aside>
  )
}
