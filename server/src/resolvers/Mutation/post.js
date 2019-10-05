const { getUserId } = require('../../utils')

const post = {
  async createParagraph(parent, { content, styling, media }, context) {
    const frameId = "cjzgtfhdabq9d0b53xb33079g"
    return context.prisma.createParagraph({
      published: false,
      content: content,
      styling: styling,
      media: media,
      parent: { connect: { id: frameId } },
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

  async createStory(parent, { title, styling, media }, context) {
    const userId = getUserId(context)
    return context.prisma.createStory({
      published: false,
      title: title,
      styling: styling,
      media: media,
      author: { connect: { id: userId } },
    })
  },
}

module.exports = { post }