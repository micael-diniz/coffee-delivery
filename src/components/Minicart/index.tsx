import { ShoppingCart } from 'phosphor-react'

export function Minicart() {
  return (
    <button className="h-[4.5rem] min-w-[3.8rem] rounded-[6px] bg-yellow-100 px-[1.15rem] py-[0.94rem]">
      <ShoppingCart size={22} weight="fill" className="fill-yellow-700" />
    </button>
  )
}
