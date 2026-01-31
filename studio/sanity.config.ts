import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'sanity-test',

  projectId: 'wgh3jw6s',
  dataset: 'test',

  plugins: [structureTool({structure, defaultDocumentNode}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
