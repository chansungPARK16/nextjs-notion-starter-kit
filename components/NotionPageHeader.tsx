import type * as types from 'notion-types'
import * as React from 'react'
import { Header } from 'react-notion-x'

import { navigationStyle } from '@/lib/config'

export function NotionPageHeader({
  block
}: {
  block: types.CollectionViewPageBlock | types.PageBlock
}) {
  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return <header></header>
}
