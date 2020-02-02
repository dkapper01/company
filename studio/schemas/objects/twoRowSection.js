export default {
  type: 'object',
  name: 'twoRowSection',
  title: 'Two Row Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subheading',
      type: 'text',
      title: 'Sub heading'
    },
    {
      name: 'imageOne',
      type: 'image',
      title: 'Image One'
    },
    {
      name: 'titleOne',
      type: 'string',
      title: 'Title One',
    },
    {
      name: 'textOne',
      type: 'text',
      title: 'Text One',
    },
    {
      name: 'imageTwo',
      type: 'image',
      title: 'Image Two'
    },
    {
      name: 'titleTwo',
      type: 'string',
      title: 'Title Two',
    },
    {
      name: 'textTwo',
      type: 'text',
      title: 'Text Two',
    },
    {
      name: 'imageThree',
      type: 'image',
      title: 'Image Three'
    },
    {
      name: 'titleThree',
      type: 'string',
      title: 'Title Three',
    },
    {
      name: 'textThree',
      type: 'text',
      title: 'Text Three',
    },
    {
      name: 'imageFour',
      type: 'image',
      title: 'Image Four'
    },
    {
      name: 'titleFour',
      type: 'string',
      title: 'Title Four',
    },
    {
      name: 'textFour',
      type: 'text',
      title: 'Text Four',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `${title}`,
        subtitle: 'Two Row Section',
      };
    },
  },
};
