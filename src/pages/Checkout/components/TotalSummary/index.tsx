import { Total } from '../Total'
import { TotalItems } from '../TotalItems'
import { TotalShipping } from '../TotalShipping'

export function TotalSummary() {
  return (
    <section
      className={`relative mt-[2.4rem] flex flex-col gap-y-[1.2rem] before:absolute before:top-[-2.3rem] before:h-[0.1rem] before:w-full before:bg-gray-400 before:content-['']`}
    >
      <TotalItems />
      <TotalShipping />
      <Total />
    </section>
  )
}
