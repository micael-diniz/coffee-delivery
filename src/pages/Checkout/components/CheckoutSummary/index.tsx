import { CoffeeCartList } from '../CoffeeCartList'
import { ConfirmOrder } from '../ConfirmOrder'
import { TotalSummary } from '../TotalSummary'

export function CheckoutSummary() {
  return (
    <aside className={`flex w-full flex-col gap-y-[1.2rem] lg:w-[40%]`}>
      <h4
        className={`font-baloo2 text-[1.8rem] font-bold leading-[130%] text-gray-800`}
      >
        Cafés selecionados
      </h4>
      <section
        className={`mt-[0.3rem] flex flex-col gap-y-[2.4rem] rounded-bl-[44px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[44px] bg-gray-200 p-[3rem] lg:p-[4rem]`}
      >
        <CoffeeCartList />
        <TotalSummary />
        <ConfirmOrder />
      </section>
    </aside>
  )
}
