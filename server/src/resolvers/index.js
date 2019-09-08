const { Query } = require('./Query')
const { post } = require('./Mutation/post')
const { User } = require('./User')
const { Story } = require('./Story')
const { Scene } = require('./Scene')
const { Frame } = require('./Frame')

module.exports = {
  Query,
  Mutation: {
    ...post,
  },
  User,
  Story,
  Scene,
  Frame,
}