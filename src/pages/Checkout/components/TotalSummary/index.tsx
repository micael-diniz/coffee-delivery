import { Total } from '../Total'
import { TotalItems } from '../TotalItems'
import { TotalShipping } from '../TotalShipping'

export function TotalSummary() {
  return (
    <section>
      <TotalItems />
      <TotalShipping />
      <Total />
    </section>
  )
}
