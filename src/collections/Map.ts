import { CollectionConfig } from 'payload'

export const MapCollection: CollectionConfig = {
  slug: 'map',
  admin: {
    group: 'Map',
  },
  endpoints: [],
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'coordinates',
      label: 'Coordinates',
      type: 'point',
      required: true,
      admin: { position: 'sidebar' },
      index: true,
    },
  ],
}
