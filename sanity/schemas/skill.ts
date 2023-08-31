import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      description: 'Proficiency of skill from 0 to 100%',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'includeInSkillsSection',
      title: 'Include in Skills Section?',
      description: 'True will display tech in skills section. False will allow you to only render within projects.',
      type: 'boolean',
    }),
  ],
  orderings: [
    {
      title: "Progress",
      name: "progressDesc",
      by: [
        { field: "progress", direction: "desc" },
      ]
    }
  ]
})
