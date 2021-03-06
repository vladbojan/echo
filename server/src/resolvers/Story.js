const Story = {
    scenes: ({ id }, args, context) => {
      return context.prisma.story({ id }).scenes({ orderBy: "position_ASC" })
    },
    author: ({ id }, args, context) => {
      return context.prisma.story({ id }).author()
    },
  }
  
  module.exports = {
    Story,
  }