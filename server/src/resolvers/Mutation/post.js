const { getUserId } = require('../../utils')

const post = {
  async createParagraph(parent, { content }, context) {
    return context.prisma.createParagraph({
      content,
    })
  },

  async publishFrame(parent, { id }, context) {
    const userId = getUserId(context)
    const postExists = await context.prisma.$exists.frame({
      id,
      author: { id: userId },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.updateFrame(
      {
        where: { id },
        data: { published: true },
      },
    )
  },

  async deleteFrame(parent, { id }, context) {
    const userId = getUserId(context)
    const postExists = await context.prisma.$exists.frame({
      id,
      author: { id: userId },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.deleteFrame({ id })
  },

  async createFrame(parent, { title, styling, media }, context) {
    const userId = getUserId(context)
    return context.prisma.createFrame({
      published: false,
      title: title,
      styling: styling,
      media: media,
      author: { connect: { id: userId } },
      paragraphs: { create: {
        published: false,
        content: "content",
        styling: styling,
        media: media,
      }},
    })
  },
}

module.exports = { post }