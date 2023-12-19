import { Trash } from 'phosphor-react'
import { CoffeeType } from '../../../../@types/coffee'
import { Price } from '../../../../components/Price'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { useCallback } from 'react'
import { useOrder } from '../../../../contexts/OrderContext'
import toast, { Toaster } from 'react-hot-toast'

type CoffeeCardCardProps = {
  coffee: CoffeeType
}
export function CoffeeCartCard({ coffee }: CoffeeCardCardProps) {
  const { addItemToCart, removeOneItemQuantity, removeItem } = useOrder()

  const handleAddToCart = useCallback(() => {
    const coffeeWithQty = { ...coffee, quantity: 1 }
    addItemToCart(coffeeWithQty)
  }, [addItemToCart, coffee])

  const handleRemoveOneItemQuantity = useCallback(() => {
    removeOneItemQuantity(coffee.id)
  }, [coffee.id, removeOneItemQuantity])

  const handleRemoveItem = useCallback(() => {
    removeItem(coffee.id)
    toast.dismiss()
    toast.success('Item removido!', {
      duration: 3000,
      position: 'top-center',
    })
  }, [coffee.id, removeItem])

  return (
    <>
      <li
        className={`coffeeCartCardContainer relative flex gap-x-[2rem] px-[0.4rem] py-[0.8rem]`}
      >
        <img
          src={coffee.image}
          alt={coffee.name}
          className={`h-[6.4rem] w-[6.4rem]`}
        />
        <div className={`flex w-full flex-col gap-y-[0.8rem]`}>
          <div className={`flex justify-between`}>
            <h3 className={`text-[1.6rem] leading-[130%] text-gray-800`}>
              {coffee.name}
            </h3>
            <Price
              value={coffee.price}
              priceStyle={`text-gray-700 leading-[130%] text-[1.6rem] font-bold`}
            />
          </div>
          <div className={`flex gap-x-[0.8rem]`}>
            <QuantitySelector
              containerClass={`ml-0`}
              quantity={coffee.quantity as number}
              onIncreaseQuantity={handleAddToCart}
              onDecreaseQuantity={handleRemoveOneItemQuantity}
            />
            <button
              onClick={handleRemoveItem}
              className={`flex items-center gap-x-[0.4rem] rounded-[6px] bg-gray-400 px-[0.8rem] py-[0.65rem] text-[1.2rem] uppercase leading-[160%] text-gray-700`}
            >
              <Trash size={16} className={`text-purple-500`} /> Remover
            </button>
            <Toaster
              toastOptions={{
                className: `toastOptions text-[1.6rem]`,
              }}
            />
          </div>
        </div>
      </li>
    </>
  )
}
