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
      type: 'simplePortableText',
      title: 'Text'
    },
    {
      name: 'logo',
      // type: 'reference',
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
