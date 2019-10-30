const Frame = {
    paragraphs: ({ id }, args, context) => {
      return context.prisma.frame({ id }).paragraphs({ orderBy: "position_ASC" })
    },
    parent: ({ id }, args, context) => {
      return context.prisma.frame({ id }).parent()
    },
  }
  
  module.exports = {
    Frame,
  }