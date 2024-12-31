import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'time_to_read',
      title: 'Time To Read',
      type: 'number',
    }),
    // defineField({
    //   name: 'subtitle',
    //   title: 'Subtitle',
    //   type: 'string',
    // }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published At',
    //   type: 'datetime',
    // }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'content',
    //           title: 'Content',
    //           type: 'text',
    //         },
    //         {
    //           name: 'type',
    //           title: 'Type',
    //           type: 'string',
    //           options: {
    //             list: [
    //               {title: 'Subheading', value: 'subheading'},
    //               {title: 'Content', value: 'content'},
    //             ],
    //           },
    //         },
    //         {
    //           name: 'ul', // Field for unordered list items
    //           title: 'Unordered List Items',
    //           type: 'array',
    //           of: [{type: 'string'}], // Changed to string type
    //         },
    //       ],
    //     },
    //   ],
    // }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Subheading', value: 'subheading'},
                  {title: 'Paragraph', value: 'paragraph'},
                ],
              },
            },
          ],
        },
        {
          type: 'image', // Image block
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true, // Enable image hotspot for cropping
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'A short description of the image for accessibility.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
    }),
    // defineField({
    //   name: 'tags',
    //   title: 'Tags',
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   initialValue: ['All'],
    // }),
  ],
})
