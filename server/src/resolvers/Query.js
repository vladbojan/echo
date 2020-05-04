const { getUserEmail } = require('../utils')

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
    const email = getUserEmail(context)
    const where = {
      author: {
        email,
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
  notes(parent, args, context) {
    const email = getUserEmail(context)
    const where = {
      author: {
        email,
      },
    }
    return context.prisma.notes({ where })
  },
  note(parent, { id }, context) {
    return context.prisma.note({ id })
  },
  me(parent, args, context) {
    const email = getUserEmail(context)
    return context.prisma.user({ email })
  },
  users(parent, args, context) {
    return context.prisma.users()
  },
  user(parent, { email }, context) {
    return context.prisma.user({ email })
  },
}

module.exports = { Query }