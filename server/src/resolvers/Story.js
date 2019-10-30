const Story = {
    scenes: ({ id }, args, context) => {
      return context.prisma.story({ id }).scenes({ orderBy: "position_ASC" })
    },
  }
  
  module.exports = {
    Story,
  }