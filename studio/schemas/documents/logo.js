export default {
  type: 'document',
  name: 'logo',
  title: 'Logo',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'logo',
      type: 'array',
      title: 'Logo',
      of: [{type: 'image'}]
    }
  ]
}
