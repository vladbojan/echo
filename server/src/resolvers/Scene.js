const Scene = {
    frames: ({ id }, args, context) => {
      return context.prisma.scene({ id }).frames()
    },
    parent: ({ id }, args, context) => {
      return context.prisma.scene({ id }).parent()
    },
  }
  
  module.exports = {
    Scene,
  }