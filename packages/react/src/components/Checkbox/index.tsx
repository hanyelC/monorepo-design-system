import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from '../../types'

import { Check } from 'phosphor-react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox({ ...props }: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
