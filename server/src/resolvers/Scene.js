const Scene = {
    frames: ({ id }, args, context) => {
      return context.prisma.scene({ id }).frames()
    },
  }
  
  module.exports = {
    Scene,
  }