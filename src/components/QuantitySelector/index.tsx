import { Minus, Plus } from 'phosphor-react'
import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

type QuantitySelectorProps = {
  quantity: number
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
  containerClass?: string
}

export function QuantitySelector({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  containerClass,
}: QuantitySelectorProps) {
  const handleIncrease = useCallback(onIncreaseQuantity, [onIncreaseQuantity])
  const handleDecrease = useCallback(onDecreaseQuantity, [onDecreaseQuantity])

  return (
    <div
      className={twMerge(
        `ml-auto box-border flex h-[3.8rem] w-full max-w-[7.2rem] items-center justify-between rounded-[6px] bg-gray-400 p-[0.8rem]`,
        containerClass,
      )}
    >
      <button onClick={handleDecrease}>
        <Minus size={14} weight="bold" className="text-purple-500" />
      </button>
      <span className={`max-w-[2rem] text-center text-[1.6rem] text-gray-900`}>
        {quantity}
      </span>
      <button onClick={handleIncrease}>
        <Plus size={16} weight="bold" className="text-purple-500" />
      </button>
    </div>
  )
}
