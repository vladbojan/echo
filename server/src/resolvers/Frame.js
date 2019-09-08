const Frame = {
    paragraphs: ({ id }, args, context) => {
      return context.prisma.frame({ id }).paragraphs()
    },
  }
  
  module.exports = {
    Frame,
  }