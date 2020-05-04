const { getUserEmail } = require('../../utils')

const post = {
  async createParagraph(parent, { content, styling, media, parentId, position }, context) {
    return context.prisma.createParagraph({
      published: false,
      content: content,
      styling: styling,
      media: media,
      position: position,
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

  async updateParagraphPosition(parent, { id, position }, context) {
    const postExists = await context.prisma.$exists.paragraph({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateParagraph(
      {
        where: { id },
        data: { position: position },
      },
    )
  },

  async deleteParagraph(parent, { id }, context) {
    const postExists = await context.prisma.$exists.paragraph({
      id,
    })
    if (!postExists) {
      throw new Error(`Paragraph not found`)
    }

    return context.prisma.deleteParagraph({ id })
  },

  async createFrame(parent, { title, styling, media, parentId, position }, context) {
    return context.prisma.createFrame({
      published: false,
      title: title,
      styling: styling,
      media: media,
      position: position,
      parent: { connect: { id: parentId } },
    })
  },

  async publishFrame(parent, { id }, context) {
    const postExists = await context.prisma.$exists.frame({
      id,
    })
    if (!postExists) {
      throw new Error(`Frame not found`)
    }

    return context.prisma.updateFrame(
      {
        where: { id },
        data: { published: true },
      },
    )
  },

  async deleteFrame(parent, { id }, context) {
    const postExists = await context.prisma.$exists.frame({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.deleteFrame({ id })
  },

  async updateFrame(parent, { id, title, styling, media, position }, context) {
    const postExists = await context.prisma.$exists.frame({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateFrame(
      {
        where: { id },
        data: { title: title, styling: styling, media: media, position: position },
      },
    )
  },

  async updateFramePosition(parent, { id, position }, context) {
    const postExists = await context.prisma.$exists.frame({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateFrame(
      {
        where: { id },
        data: { position: position },
      },
    )
  },

  async createScene(parent, { title, styling, media, parentId, position }, context) {
    return context.prisma.createScene({
      published: false,
      title: title,
      styling: styling,
      media: media,
      position: position,
      parent: { connect: { id: parentId } },
    })
  },

  async deleteScene(parent, { id }, context) {
    const postExists = await context.prisma.$exists.scene({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.deleteScene({ id })
  },

  async updateScene(parent, { id, title, styling, media, position }, context) {
    const postExists = await context.prisma.$exists.scene({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateScene(
      {
        where: { id },
        data: { title: title, styling: styling, media: media, position: position },
      },
    )
  },

  async updateScenePosition(parent, { id, position }, context) {
    const postExists = await context.prisma.$exists.scene({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateScene(
      {
        where: { id },
        data: { position: position },
      },
    )
  },

  async createStory(parent, { title, styling, media, position }, context) {
    const userEmail = getUserEmail(context)
    return context.prisma.createStory({
      published: false,
      title: title,
      styling: styling,
      media: media,
      position: position,
      author: { connect: { email: userEmail } },
    })
  },

  async deleteStory(parent, { id }, context) {
    const userEmail = getUserEmail(context)
    const postExists = await context.prisma.$exists.story({
      id,
      author: { email: userEmail },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.deleteStory({ id })
  },

  async updateStory(parent, { id, title, styling, media, position }, context) {
    const postExists = await context.prisma.$exists.story({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateStory(
      {
        where: { id },
        data: { title: title, styling: styling, media: media, position: position },
      },
    )
  },

  async updateStoryPosition(parent, { id, position }, context) {
    const postExists = await context.prisma.$exists.story({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateStory(
      {
        where: { id },
        data: { position: position },
      },
    )
  },

  async createNote(parent, { content, position }, context) {
    const userEmail = getUserEmail(context)
    return context.prisma.createNote({
      content: content,
      position: position,
      author: { connect: { email: userEmail } },
    })
  },

  async deleteNote(parent, { id }, context) {
    const userEmail = getUserEmail(context)
    const postExists = await context.prisma.$exists.note({
      id,
      author: { email: userEmail },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.deleteNote({ id })
  },

  async updateNote(parent, { id, content, position }, context) {
    const postExists = await context.prisma.$exists.note({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateNote(
      {
        where: { id },
        data: { content: content, position: position },
      },
    )
  },

  async updateNotePosition(parent, { id, position }, context) {
    const postExists = await context.prisma.$exists.note({
      id,
    })
    if (!postExists) {
      throw new Error(`Post not found`)
    }

    return context.prisma.updateNote(
      {
        where: { id },
        data: { position: position },
      },
    )
  },

  async createUser(parent, { email }, context) {
    return context.prisma.createUser({
      email: email,
      password: email,
      name: email,
    })
  },
}

module.exports = { post }