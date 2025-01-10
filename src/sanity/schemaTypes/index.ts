import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import comments from './comments'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post , comments],
}
