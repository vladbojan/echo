const { Query } = require('./Query')
const { post } = require('./Mutation/post')
const { User } = require('./User')
const { Story } = require('./Story')
const { Scene } = require('./Scene')
const { Frame } = require('./Frame')
const { Paragraph } = require('./Paragraph')

module.exports = {
  Query,
  Mutation: {
    ...post,
  },
  User,
  Story,
  Scene,
  Frame,
  Paragraph,
}