const Note = {
    author: ({ id }, args, context) => {
      return context.prisma.note({ id }).author()
    },
  }
  
  module.exports = {
    Note,
  }