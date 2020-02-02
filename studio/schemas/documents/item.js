export default {
  type: 'document',
  name: 'item',
  title: 'Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title}) {
      return {
        title: `${title}`,
        subtitle: 'Item'
      }
    }
  }
}
