export default {
  type: 'object',
  name: 'threeColSection',
  title: 'Three column section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'titleOne',
      type: 'string',
      title: 'Title One'
    },
    {
      name: 'shortDescriptionOne',
      type: 'simplePortableText',
      title: 'Short Description One'
    },
    {
      name: 'titleTwo',
      type: 'string',
      title: 'Title Two'
    },
    {
      name: 'shortDescriptionTwo',
      type: 'simplePortableText',
      title: 'Short Description Two'
    },
    {
      name: 'titleThree',
      type: 'string',
      title: 'Title Three'
    },
    {
      name: 'shortDescriptionThree',
      type: 'simplePortableText',
      title: 'Short Description Three'
    }
  ],
  preview: {
    select: {
      title: 'titleOne'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Three column section'
      }
    }
  }
}
