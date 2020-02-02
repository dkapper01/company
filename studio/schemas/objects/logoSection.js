export default {
  type: 'object',
  name: 'logoSection',
  title: 'Logo Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text'
    },
    {
      name: 'logo',
      type: 'array',
      title: 'Logo',
      of: [{type: 'image'}]
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    }
  }
}
