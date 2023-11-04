import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { MapPin } from 'phosphor-react'

export function UserAddress() {
  const address = ['Aparecida de Goiânia', 'GO']
  return (
    <Popover
      backdrop="transparent"
      placement="bottom-end"
      className="max-w-[25.6rem]"
    >
      <PopoverTrigger>
        <button className="flex h-[4.5rem] min-w-[3.8rem] items-center gap-x-[0.4rem] rounded-[6px] bg-purple-100 px-[1.15rem] py-[0.94rem] text-[1.4rem] text-purple-700 focus-visible:outline-purple-700">
          <MapPin size={22} weight="fill" className="fill-purple-500" />
          <p>{address.join(', ')}</p>
        </button>
      </PopoverTrigger>
      <PopoverContent className="flex  items-start gap-y-[0.5rem] bg-gray-100 p-[1.6rem] text-[1.4rem] text-purple-500">
        <p>
          <strong>Street:</strong> L-24
        </p>
        <p>
          <strong>City:</strong> Aparecida de Goiânia
        </p>
        <p>
          <strong>Zip Code:</strong> 74950-300
        </p>
      </PopoverContent>
    </Popover>
  )
}
