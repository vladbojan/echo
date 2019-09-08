const { getUserId } = require('../utils')

const Query = {
  paragraphs(parent, args, context) {
    return context.prisma.paragraphs()
  },
  frames(parent, args, context) {
    return context.prisma.frames()
  },
  draftFrames(parent, args, context) {
    return context.prisma.frames({ where: { published: false }  })
  },
  scenes(parent, args, context) {
    return context.prisma.scenes()
  },
  stories(parent, args, context) {
    const id = getUserId(context)
    const where = {
      author: {
        id,
      },
    }
    return context.prisma.stories({ where })
  },
  frame(parent, { id }, context) {
    return context.prisma.frame({ id })
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  },
  users(parent, args, context) {
    return context.prisma.users()
  },
}

module.exports = { Query }