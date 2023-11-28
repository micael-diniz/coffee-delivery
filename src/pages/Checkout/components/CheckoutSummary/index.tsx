import { CoffeeCartList } from '../CoffeeCartList'
import { ConfirmOrder } from '../ConfirmOrder'
import { TotalSummary } from '../TotalSummary'

export function CheckoutSummary() {
  return (
    <aside className={`w-[40%]`}>
      <CoffeeCartList />
      <TotalSummary />
      <ConfirmOrder />
    </aside>
  )
}
