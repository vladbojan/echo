const { getUserId } = require('../../utils')

const post = {
  async createParagraph(parent, { content, styling, media, parentId }, context) {
    return context.prisma.createParagraph({
      published: false,
      content: content,
      styling: styling,
      media: media,
      parent: { connect: { id: parentId } },
    })
  },

  async updateParagraph(parent, { id, content, styling, media }, context) {
    const postExists = await context.prisma.$exists.paragraph({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateParagraph(
      {
        where: { id },
        data: { content: content, styling: styling, media: media },
      },
    )
  },

  async createFrame(parent, { title, styling, media, parentId }, context) {
    return context.prisma.createFrame({
      published: false,
      title: title,
      styling: styling,
      media: media,
      parent: { connect: { id: parentId } },
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

  async createScene(parent, { title, styling, media, parentId }, context) {
    return context.prisma.createScene({
      published: false,
      title: title,
      styling: styling,
      media: media,
      parent: { connect: { id: parentId } },
    })
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