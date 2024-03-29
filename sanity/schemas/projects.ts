import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: "demo_id",
      title: "Demo Id",
      type: "text",
      description: "Id of YouTube Video",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    })
  ],
  orderings: [
    {
      title: "Order",
      name: "customSortOrder",
      by: [
        { field: "order", direction: "asc" },
      ]
    }
  ]
})
