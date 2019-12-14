const User = {
    stories: ({ email }, args, context) => {
      return context.prisma.user({ email }).stories()
    },
  }
  
  module.exports = {
    User,
  }