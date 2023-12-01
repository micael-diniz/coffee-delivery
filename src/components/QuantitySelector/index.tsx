import { Minus, Plus } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'

type QuantitySelectorProps = {
  containerClass?: string
}

export function QuantitySelector({ containerClass }: QuantitySelectorProps) {
  return (
    <div
      className={twMerge(
        `ml-auto box-border flex h-[3.8rem] w-full max-w-[7.2rem] items-center justify-between rounded-[6px] bg-gray-400 p-[0.8rem]`,
        containerClass,
      )}
    >
      <button>
        <Minus size={14} weight="bold" className="text-purple-500" />
      </button>
      <span className={`max-w-[2rem] text-center text-[1.6rem] text-gray-900`}>
        1
      </span>
      <button>
        <Plus size={16} weight="bold" className="text-purple-500" />
      </button>
    </div>
  )
}
