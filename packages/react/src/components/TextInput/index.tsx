import { ComponentProps } from '../../types'
import { Input, Prefix, TextInputContainer } from './styles'

import { forwardRef } from 'react'

export type TextInputProps = {
  prefix?: string
} & ComponentProps<typeof Input>

export const TextInput = forwardRef<typeof Input, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {prefix ? <Prefix>{prefix}</Prefix> : null}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
