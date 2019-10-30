const { getUserId } = require('../utils')

const Query = {
  paragraphs(parent, args, context) {
    return context.prisma.paragraphs({ orderBy: "position_ASC" })
  },
  frames(parent, args, context) {
    return context.prisma.frames({ orderBy: "position_ASC" })
  },
  draftFrames(parent, args, context) {
    return context.prisma.frames({ where: { published: false }  })
  },
  scenes(parent, args, context) {
    return context.prisma.scenes({ orderBy: "position_ASC" })
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
  story(parent, { id }, context) {
    return context.prisma.story({ id })
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