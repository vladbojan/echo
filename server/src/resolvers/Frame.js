const Frame = {
    paragraphs: ({ id }, args, context) => {
      return context.prisma.frame({ id }).paragraphs()
    },
    parent: ({ id }, args, context) => {
      return context.prisma.frame({ id }).parent()
    },
  }
  
  module.exports = {
    Frame,
  }