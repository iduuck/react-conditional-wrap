// @flow
import React from 'react'
import type { Props } from './types'

export function Wrap({ when, children, element: Element, ...props }: Props): React$Element<*> {
  if (typeof when === 'function' ? when() : when) {
    return <Element {...props}>{children}</Element>
  }

  return children
}
