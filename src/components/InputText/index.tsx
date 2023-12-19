import { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { AddressFormSchemaType } from '../../contexts/CheckoutContext'
import { FieldErrors } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sufix?: string
  sufixStyle?: string
  containerStyle?: string
  inputStyle?: string
  errors?: FieldErrors<AddressFormSchemaType>
  name: keyof AddressFormSchemaType
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      sufix,
      sufixStyle,
      containerStyle,
      inputStyle,
      errors,
      name,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <div className={twMerge(`relative flex-col`, containerStyle)}>
        <input
          ref={ref}
          className={twMerge(
            'focus-visible:plaholder:text-[0px] w-full rounded-[4px] border-[1px] border-gray-400 bg-gray-300 p-[1.2rem] text-[1.4rem] text-gray-700 placeholder:text-gray-600 focus-visible:outline-yellow-700',
            inputStyle,
          )}
          {...props}
        />
        {!!sufix && (
          <span
            className={twMerge(
              `absolute text-[1.2rem] italic text-gray-600`,
              sufixStyle,
            )}
          >
            {sufix}
          </span>
        )}
        <p>
          <ErrorMessage errors={errors} name={name} />
        </p>
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
