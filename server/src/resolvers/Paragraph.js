const Paragraph = {
    parent: ({ id }, args, context) => {
      return context.prisma.paragraph({ id }).parent()
    },
  }
  
  module.exports = {
    Paragraph,
  }