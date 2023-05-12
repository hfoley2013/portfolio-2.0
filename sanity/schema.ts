import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import pageInfo from './schemas/pageInfo'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, author, category, blockContent],
}
