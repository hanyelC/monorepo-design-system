import { ComponentProps } from '../../types'
import { Input, Prefix, TextInputContainer } from './styles'

import { forwardRef } from 'react'
import type * as Stitches from '@stitches/react'

export type TextInputProps = {
  prefix?: string
  variants: Stitches.VariantProps<typeof TextInputContainer>
} & ComponentProps<typeof Input>

export const TextInput = forwardRef<typeof Input, TextInputProps>(
  ({ prefix, variants, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer {...variants}>
        {prefix ? <Prefix>{prefix}</Prefix> : null}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
