import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemas/pageInfo'
import skill from './schemas/skill'
import experience from './schemas/experience'
import projects from './schemas/projects'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageInfo,
    skill,
    experience,
    projects,
    social,
  ],
}
