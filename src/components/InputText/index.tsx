import { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { AddressType, FieldError } from '../../@types/shipping'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sufix?: string
  sufixStyle?: string
  containerStyle?: string
  inputStyle?: string
  name: keyof AddressType
  errors: false | FieldError[]
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      sufix,
      sufixStyle,
      containerStyle,
      inputStyle,
      name,
      errors,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const fieldError = errors && errors.find((err) => err.name === name)
    const errorClass = fieldError && 'border-yellow-700'
    return (
      <div className={twMerge(`relative flex-col`, containerStyle)}>
        <label htmlFor="name">
          <input
            name={name}
            ref={ref}
            className={twMerge(
              'focus-visible:plaholder:text-[0px] w-full rounded-[4px] border-[2px] border-gray-400 border-transparent bg-gray-300 p-[1.2rem] text-[1.4rem] text-gray-700 placeholder:text-gray-600 focus-visible:outline-yellow-700',
              inputStyle,
              errorClass,
            )}
            {...props}
          />
          {fieldError && (
            <p className={`text-[1.4rem] text-yellow-700`}>
              {fieldError?.message}
            </p>
          )}
        </label>
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
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
