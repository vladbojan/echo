const Story = {
    scenes: ({ id }, args, context) => {
      return context.prisma.story({ id }).scenes()
    },
  }
  
  module.exports = {
    Story,
  }