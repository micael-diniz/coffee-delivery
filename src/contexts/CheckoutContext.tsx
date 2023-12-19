import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, createContext, useContext } from 'react'
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from 'react-hook-form'
import { z } from 'zod'

const addressFormSchema = z.object({
  postalCode: z.string().min(9, 'Campo obrigatório!'),
  street: z.string().min(1, 'Campo obrigatório!'),
  number: z.string().min(1, 'Campo obrigatório!'),
  complement: z.string().optional(),
  neighbourhood: z.string().min(1, 'Campo obrigatório!'),
  city: z.string().min(1, 'Campo obrigatório!'),
  state: z.string().min(2, 'Campo obrigatório!'),
})

export type AddressFormSchemaType = z.infer<typeof addressFormSchema>

type CheckoutContextProps = {
  register: UseFormRegister<AddressFormSchemaType>
  handleSubmitAddressForm: UseFormHandleSubmit<AddressFormSchemaType>
  addressFormErrors: FieldErrors<AddressFormSchemaType>
}

type CheckoutProviderProps = {
  children: ReactNode
}
const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormSchemaType>({
    resolver: zodResolver(addressFormSchema),
  })
  console.log({errors})
  return (
    <CheckoutContext.Provider
      value={{
        register,
        handleSubmitAddressForm: handleSubmit,
        addressFormErrors: errors,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)
