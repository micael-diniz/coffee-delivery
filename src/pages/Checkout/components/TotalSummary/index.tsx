import { Total } from '../Total'
import { TotalItems } from '../TotalItems'
import { TotalShipping } from '../TotalShipping'

export function TotalSummary() {
  return (
    <section className={`flex flex-col gap-y-[1.2rem]`}>
      <TotalItems />
      <TotalShipping />
      <Total />
    </section>
  )
}
