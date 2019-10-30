const Scene = {
    frames: ({ id }, args, context) => {
      return context.prisma.scene({ id }).frames({ orderBy: "position_ASC" })
    },
    parent: ({ id }, args, context) => {
      return context.prisma.scene({ id }).parent()
    },
  }
  
  module.exports = {
    Scene,
  }