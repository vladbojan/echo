const User = {
    stories: ({ id }, args, context) => {
      return context.prisma.user({ id }).stories()
    },
  }
  
  module.exports = {
    User,
  }