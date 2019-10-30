module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFrame {
  count: Int!
}

type AggregateParagraph {
  count: Int!
}

type AggregateScene {
  count: Int!
}

type AggregateStory {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Frame {
  id: ID!
  published: Boolean!
  title: String!
  styling: String
  media: String
  paragraphs(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Paragraph!]
  parent: Scene!
  position: String
}

type FrameConnection {
  pageInfo: PageInfo!
  edges: [FrameEdge]!
  aggregate: AggregateFrame!
}

input FrameCreateInput {
  id: ID
  published: Boolean
  title: String!
  styling: String
  media: String
  paragraphs: ParagraphCreateManyWithoutParentInput
  parent: SceneCreateOneWithoutFramesInput!
  position: String
}

input FrameCreateManyWithoutParentInput {
  create: [FrameCreateWithoutParentInput!]
  connect: [FrameWhereUniqueInput!]
}

input FrameCreateOneWithoutParagraphsInput {
  create: FrameCreateWithoutParagraphsInput
  connect: FrameWhereUniqueInput
}

input FrameCreateWithoutParagraphsInput {
  id: ID
  published: Boolean
  title: String!
  styling: String
  media: String
  parent: SceneCreateOneWithoutFramesInput!
  position: String
}

input FrameCreateWithoutParentInput {
  id: ID
  published: Boolean
  title: String!
  styling: String
  media: String
  paragraphs: ParagraphCreateManyWithoutParentInput
  position: String
}

type FrameEdge {
  node: Frame!
  cursor: String!
}

enum FrameOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  styling_ASC
  styling_DESC
  media_ASC
  media_DESC
  position_ASC
  position_DESC
}

type FramePreviousValues {
  id: ID!
  published: Boolean!
  title: String!
  styling: String
  media: String
  position: String
}

input FrameScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [FrameScalarWhereInput!]
  OR: [FrameScalarWhereInput!]
  NOT: [FrameScalarWhereInput!]
}

type FrameSubscriptionPayload {
  mutation: MutationType!
  node: Frame
  updatedFields: [String!]
  previousValues: FramePreviousValues
}

input FrameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FrameWhereInput
  AND: [FrameSubscriptionWhereInput!]
  OR: [FrameSubscriptionWhereInput!]
  NOT: [FrameSubscriptionWhereInput!]
}

input FrameUpdateInput {
  published: Boolean
  title: String
  styling: String
  media: String
  paragraphs: ParagraphUpdateManyWithoutParentInput
  parent: SceneUpdateOneRequiredWithoutFramesInput
  position: String
}

input FrameUpdateManyDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  position: String
}

input FrameUpdateManyMutationInput {
  published: Boolean
  title: String
  styling: String
  media: String
  position: String
}

input FrameUpdateManyWithoutParentInput {
  create: [FrameCreateWithoutParentInput!]
  delete: [FrameWhereUniqueInput!]
  connect: [FrameWhereUniqueInput!]
  set: [FrameWhereUniqueInput!]
  disconnect: [FrameWhereUniqueInput!]
  update: [FrameUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [FrameUpsertWithWhereUniqueWithoutParentInput!]
  deleteMany: [FrameScalarWhereInput!]
  updateMany: [FrameUpdateManyWithWhereNestedInput!]
}

input FrameUpdateManyWithWhereNestedInput {
  where: FrameScalarWhereInput!
  data: FrameUpdateManyDataInput!
}

input FrameUpdateOneRequiredWithoutParagraphsInput {
  create: FrameCreateWithoutParagraphsInput
  update: FrameUpdateWithoutParagraphsDataInput
  upsert: FrameUpsertWithoutParagraphsInput
  connect: FrameWhereUniqueInput
}

input FrameUpdateWithoutParagraphsDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  parent: SceneUpdateOneRequiredWithoutFramesInput
  position: String
}

input FrameUpdateWithoutParentDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  paragraphs: ParagraphUpdateManyWithoutParentInput
  position: String
}

input FrameUpdateWithWhereUniqueWithoutParentInput {
  where: FrameWhereUniqueInput!
  data: FrameUpdateWithoutParentDataInput!
}

input FrameUpsertWithoutParagraphsInput {
  update: FrameUpdateWithoutParagraphsDataInput!
  create: FrameCreateWithoutParagraphsInput!
}

input FrameUpsertWithWhereUniqueWithoutParentInput {
  where: FrameWhereUniqueInput!
  update: FrameUpdateWithoutParentDataInput!
  create: FrameCreateWithoutParentInput!
}

input FrameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  paragraphs_every: ParagraphWhereInput
  paragraphs_some: ParagraphWhereInput
  paragraphs_none: ParagraphWhereInput
  parent: SceneWhereInput
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [FrameWhereInput!]
  OR: [FrameWhereInput!]
  NOT: [FrameWhereInput!]
}

input FrameWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFrame(data: FrameCreateInput!): Frame!
  updateFrame(data: FrameUpdateInput!, where: FrameWhereUniqueInput!): Frame
  updateManyFrames(data: FrameUpdateManyMutationInput!, where: FrameWhereInput): BatchPayload!
  upsertFrame(where: FrameWhereUniqueInput!, create: FrameCreateInput!, update: FrameUpdateInput!): Frame!
  deleteFrame(where: FrameWhereUniqueInput!): Frame
  deleteManyFrames(where: FrameWhereInput): BatchPayload!
  createParagraph(data: ParagraphCreateInput!): Paragraph!
  updateParagraph(data: ParagraphUpdateInput!, where: ParagraphWhereUniqueInput!): Paragraph
  updateManyParagraphs(data: ParagraphUpdateManyMutationInput!, where: ParagraphWhereInput): BatchPayload!
  upsertParagraph(where: ParagraphWhereUniqueInput!, create: ParagraphCreateInput!, update: ParagraphUpdateInput!): Paragraph!
  deleteParagraph(where: ParagraphWhereUniqueInput!): Paragraph
  deleteManyParagraphs(where: ParagraphWhereInput): BatchPayload!
  createScene(data: SceneCreateInput!): Scene!
  updateScene(data: SceneUpdateInput!, where: SceneWhereUniqueInput!): Scene
  updateManyScenes(data: SceneUpdateManyMutationInput!, where: SceneWhereInput): BatchPayload!
  upsertScene(where: SceneWhereUniqueInput!, create: SceneCreateInput!, update: SceneUpdateInput!): Scene!
  deleteScene(where: SceneWhereUniqueInput!): Scene
  deleteManyScenes(where: SceneWhereInput): BatchPayload!
  createStory(data: StoryCreateInput!): Story!
  updateStory(data: StoryUpdateInput!, where: StoryWhereUniqueInput!): Story
  updateManyStories(data: StoryUpdateManyMutationInput!, where: StoryWhereInput): BatchPayload!
  upsertStory(where: StoryWhereUniqueInput!, create: StoryCreateInput!, update: StoryUpdateInput!): Story!
  deleteStory(where: StoryWhereUniqueInput!): Story
  deleteManyStories(where: StoryWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Paragraph {
  id: ID!
  published: Boolean!
  content: String!
  styling: String
  media: String
  parent: Frame!
  position: String
}

type ParagraphConnection {
  pageInfo: PageInfo!
  edges: [ParagraphEdge]!
  aggregate: AggregateParagraph!
}

input ParagraphCreateInput {
  id: ID
  published: Boolean
  content: String!
  styling: String
  media: String
  parent: FrameCreateOneWithoutParagraphsInput!
  position: String
}

input ParagraphCreateManyWithoutParentInput {
  create: [ParagraphCreateWithoutParentInput!]
  connect: [ParagraphWhereUniqueInput!]
}

input ParagraphCreateWithoutParentInput {
  id: ID
  published: Boolean
  content: String!
  styling: String
  media: String
  position: String
}

type ParagraphEdge {
  node: Paragraph!
  cursor: String!
}

enum ParagraphOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  content_ASC
  content_DESC
  styling_ASC
  styling_DESC
  media_ASC
  media_DESC
  position_ASC
  position_DESC
}

type ParagraphPreviousValues {
  id: ID!
  published: Boolean!
  content: String!
  styling: String
  media: String
  position: String
}

input ParagraphScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [ParagraphScalarWhereInput!]
  OR: [ParagraphScalarWhereInput!]
  NOT: [ParagraphScalarWhereInput!]
}

type ParagraphSubscriptionPayload {
  mutation: MutationType!
  node: Paragraph
  updatedFields: [String!]
  previousValues: ParagraphPreviousValues
}

input ParagraphSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParagraphWhereInput
  AND: [ParagraphSubscriptionWhereInput!]
  OR: [ParagraphSubscriptionWhereInput!]
  NOT: [ParagraphSubscriptionWhereInput!]
}

input ParagraphUpdateInput {
  published: Boolean
  content: String
  styling: String
  media: String
  parent: FrameUpdateOneRequiredWithoutParagraphsInput
  position: String
}

input ParagraphUpdateManyDataInput {
  published: Boolean
  content: String
  styling: String
  media: String
  position: String
}

input ParagraphUpdateManyMutationInput {
  published: Boolean
  content: String
  styling: String
  media: String
  position: String
}

input ParagraphUpdateManyWithoutParentInput {
  create: [ParagraphCreateWithoutParentInput!]
  delete: [ParagraphWhereUniqueInput!]
  connect: [ParagraphWhereUniqueInput!]
  set: [ParagraphWhereUniqueInput!]
  disconnect: [ParagraphWhereUniqueInput!]
  update: [ParagraphUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [ParagraphUpsertWithWhereUniqueWithoutParentInput!]
  deleteMany: [ParagraphScalarWhereInput!]
  updateMany: [ParagraphUpdateManyWithWhereNestedInput!]
}

input ParagraphUpdateManyWithWhereNestedInput {
  where: ParagraphScalarWhereInput!
  data: ParagraphUpdateManyDataInput!
}

input ParagraphUpdateWithoutParentDataInput {
  published: Boolean
  content: String
  styling: String
  media: String
  position: String
}

input ParagraphUpdateWithWhereUniqueWithoutParentInput {
  where: ParagraphWhereUniqueInput!
  data: ParagraphUpdateWithoutParentDataInput!
}

input ParagraphUpsertWithWhereUniqueWithoutParentInput {
  where: ParagraphWhereUniqueInput!
  update: ParagraphUpdateWithoutParentDataInput!
  create: ParagraphCreateWithoutParentInput!
}

input ParagraphWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  parent: FrameWhereInput
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [ParagraphWhereInput!]
  OR: [ParagraphWhereInput!]
  NOT: [ParagraphWhereInput!]
}

input ParagraphWhereUniqueInput {
  id: ID
}

type Query {
  frame(where: FrameWhereUniqueInput!): Frame
  frames(where: FrameWhereInput, orderBy: FrameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Frame]!
  framesConnection(where: FrameWhereInput, orderBy: FrameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FrameConnection!
  paragraph(where: ParagraphWhereUniqueInput!): Paragraph
  paragraphs(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Paragraph]!
  paragraphsConnection(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParagraphConnection!
  scene(where: SceneWhereUniqueInput!): Scene
  scenes(where: SceneWhereInput, orderBy: SceneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Scene]!
  scenesConnection(where: SceneWhereInput, orderBy: SceneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SceneConnection!
  story(where: StoryWhereUniqueInput!): Story
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story]!
  storiesConnection(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Scene {
  id: ID!
  published: Boolean!
  title: String
  styling: String!
  media: String!
  frames(where: FrameWhereInput, orderBy: FrameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Frame!]
  parent: Story!
  position: String
}

type SceneConnection {
  pageInfo: PageInfo!
  edges: [SceneEdge]!
  aggregate: AggregateScene!
}

input SceneCreateInput {
  id: ID
  published: Boolean
  title: String
  styling: String
  media: String
  frames: FrameCreateManyWithoutParentInput
  parent: StoryCreateOneWithoutScenesInput!
  position: String
}

input SceneCreateManyWithoutParentInput {
  create: [SceneCreateWithoutParentInput!]
  connect: [SceneWhereUniqueInput!]
}

input SceneCreateOneWithoutFramesInput {
  create: SceneCreateWithoutFramesInput
  connect: SceneWhereUniqueInput
}

input SceneCreateWithoutFramesInput {
  id: ID
  published: Boolean
  title: String
  styling: String
  media: String
  parent: StoryCreateOneWithoutScenesInput!
  position: String
}

input SceneCreateWithoutParentInput {
  id: ID
  published: Boolean
  title: String
  styling: String
  media: String
  frames: FrameCreateManyWithoutParentInput
  position: String
}

type SceneEdge {
  node: Scene!
  cursor: String!
}

enum SceneOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  styling_ASC
  styling_DESC
  media_ASC
  media_DESC
  position_ASC
  position_DESC
}

type ScenePreviousValues {
  id: ID!
  published: Boolean!
  title: String
  styling: String!
  media: String!
  position: String
}

input SceneScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [SceneScalarWhereInput!]
  OR: [SceneScalarWhereInput!]
  NOT: [SceneScalarWhereInput!]
}

type SceneSubscriptionPayload {
  mutation: MutationType!
  node: Scene
  updatedFields: [String!]
  previousValues: ScenePreviousValues
}

input SceneSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SceneWhereInput
  AND: [SceneSubscriptionWhereInput!]
  OR: [SceneSubscriptionWhereInput!]
  NOT: [SceneSubscriptionWhereInput!]
}

input SceneUpdateInput {
  published: Boolean
  title: String
  styling: String
  media: String
  frames: FrameUpdateManyWithoutParentInput
  parent: StoryUpdateOneRequiredWithoutScenesInput
  position: String
}

input SceneUpdateManyDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  position: String
}

input SceneUpdateManyMutationInput {
  published: Boolean
  title: String
  styling: String
  media: String
  position: String
}

input SceneUpdateManyWithoutParentInput {
  create: [SceneCreateWithoutParentInput!]
  delete: [SceneWhereUniqueInput!]
  connect: [SceneWhereUniqueInput!]
  set: [SceneWhereUniqueInput!]
  disconnect: [SceneWhereUniqueInput!]
  update: [SceneUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [SceneUpsertWithWhereUniqueWithoutParentInput!]
  deleteMany: [SceneScalarWhereInput!]
  updateMany: [SceneUpdateManyWithWhereNestedInput!]
}

input SceneUpdateManyWithWhereNestedInput {
  where: SceneScalarWhereInput!
  data: SceneUpdateManyDataInput!
}

input SceneUpdateOneRequiredWithoutFramesInput {
  create: SceneCreateWithoutFramesInput
  update: SceneUpdateWithoutFramesDataInput
  upsert: SceneUpsertWithoutFramesInput
  connect: SceneWhereUniqueInput
}

input SceneUpdateWithoutFramesDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  parent: StoryUpdateOneRequiredWithoutScenesInput
  position: String
}

input SceneUpdateWithoutParentDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  frames: FrameUpdateManyWithoutParentInput
  position: String
}

input SceneUpdateWithWhereUniqueWithoutParentInput {
  where: SceneWhereUniqueInput!
  data: SceneUpdateWithoutParentDataInput!
}

input SceneUpsertWithoutFramesInput {
  update: SceneUpdateWithoutFramesDataInput!
  create: SceneCreateWithoutFramesInput!
}

input SceneUpsertWithWhereUniqueWithoutParentInput {
  where: SceneWhereUniqueInput!
  update: SceneUpdateWithoutParentDataInput!
  create: SceneCreateWithoutParentInput!
}

input SceneWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  frames_every: FrameWhereInput
  frames_some: FrameWhereInput
  frames_none: FrameWhereInput
  parent: StoryWhereInput
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [SceneWhereInput!]
  OR: [SceneWhereInput!]
  NOT: [SceneWhereInput!]
}

input SceneWhereUniqueInput {
  id: ID
}

type Story {
  id: ID!
  published: Boolean!
  title: String
  styling: String!
  media: String!
  scenes(where: SceneWhereInput, orderBy: SceneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Scene!]
  author: User!
  position: String
}

type StoryConnection {
  pageInfo: PageInfo!
  edges: [StoryEdge]!
  aggregate: AggregateStory!
}

input StoryCreateInput {
  id: ID
  published: Boolean
  title: String
  styling: String
  media: String
  scenes: SceneCreateManyWithoutParentInput
  author: UserCreateOneWithoutStoriesInput!
  position: String
}

input StoryCreateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  connect: [StoryWhereUniqueInput!]
}

input StoryCreateOneWithoutScenesInput {
  create: StoryCreateWithoutScenesInput
  connect: StoryWhereUniqueInput
}

input StoryCreateWithoutAuthorInput {
  id: ID
  published: Boolean
  title: String
  styling: String
  media: String
  scenes: SceneCreateManyWithoutParentInput
  position: String
}

input StoryCreateWithoutScenesInput {
  id: ID
  published: Boolean
  title: String
  styling: String
  media: String
  author: UserCreateOneWithoutStoriesInput!
  position: String
}

type StoryEdge {
  node: Story!
  cursor: String!
}

enum StoryOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  styling_ASC
  styling_DESC
  media_ASC
  media_DESC
  position_ASC
  position_DESC
}

type StoryPreviousValues {
  id: ID!
  published: Boolean!
  title: String
  styling: String!
  media: String!
  position: String
}

input StoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [StoryScalarWhereInput!]
  OR: [StoryScalarWhereInput!]
  NOT: [StoryScalarWhereInput!]
}

type StorySubscriptionPayload {
  mutation: MutationType!
  node: Story
  updatedFields: [String!]
  previousValues: StoryPreviousValues
}

input StorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoryWhereInput
  AND: [StorySubscriptionWhereInput!]
  OR: [StorySubscriptionWhereInput!]
  NOT: [StorySubscriptionWhereInput!]
}

input StoryUpdateInput {
  published: Boolean
  title: String
  styling: String
  media: String
  scenes: SceneUpdateManyWithoutParentInput
  author: UserUpdateOneRequiredWithoutStoriesInput
  position: String
}

input StoryUpdateManyDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  position: String
}

input StoryUpdateManyMutationInput {
  published: Boolean
  title: String
  styling: String
  media: String
  position: String
}

input StoryUpdateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  delete: [StoryWhereUniqueInput!]
  connect: [StoryWhereUniqueInput!]
  set: [StoryWhereUniqueInput!]
  disconnect: [StoryWhereUniqueInput!]
  update: [StoryUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [StoryUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [StoryScalarWhereInput!]
  updateMany: [StoryUpdateManyWithWhereNestedInput!]
}

input StoryUpdateManyWithWhereNestedInput {
  where: StoryScalarWhereInput!
  data: StoryUpdateManyDataInput!
}

input StoryUpdateOneRequiredWithoutScenesInput {
  create: StoryCreateWithoutScenesInput
  update: StoryUpdateWithoutScenesDataInput
  upsert: StoryUpsertWithoutScenesInput
  connect: StoryWhereUniqueInput
}

input StoryUpdateWithoutAuthorDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  scenes: SceneUpdateManyWithoutParentInput
  position: String
}

input StoryUpdateWithoutScenesDataInput {
  published: Boolean
  title: String
  styling: String
  media: String
  author: UserUpdateOneRequiredWithoutStoriesInput
  position: String
}

input StoryUpdateWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  data: StoryUpdateWithoutAuthorDataInput!
}

input StoryUpsertWithoutScenesInput {
  update: StoryUpdateWithoutScenesDataInput!
  create: StoryCreateWithoutScenesInput!
}

input StoryUpsertWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  update: StoryUpdateWithoutAuthorDataInput!
  create: StoryCreateWithoutAuthorInput!
}

input StoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  styling: String
  styling_not: String
  styling_in: [String!]
  styling_not_in: [String!]
  styling_lt: String
  styling_lte: String
  styling_gt: String
  styling_gte: String
  styling_contains: String
  styling_not_contains: String
  styling_starts_with: String
  styling_not_starts_with: String
  styling_ends_with: String
  styling_not_ends_with: String
  media: String
  media_not: String
  media_in: [String!]
  media_not_in: [String!]
  media_lt: String
  media_lte: String
  media_gt: String
  media_gte: String
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  scenes_every: SceneWhereInput
  scenes_some: SceneWhereInput
  scenes_none: SceneWhereInput
  author: UserWhereInput
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [StoryWhereInput!]
  OR: [StoryWhereInput!]
  NOT: [StoryWhereInput!]
}

input StoryWhereUniqueInput {
  id: ID
}

type Subscription {
  frame(where: FrameSubscriptionWhereInput): FrameSubscriptionPayload
  paragraph(where: ParagraphSubscriptionWhereInput): ParagraphSubscriptionPayload
  scene(where: SceneSubscriptionWhereInput): SceneSubscriptionPayload
  story(where: StorySubscriptionWhereInput): StorySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  name: String!
  stories: StoryCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutStoriesInput {
  id: ID
  email: String!
  password: String!
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  stories: StoryUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  update: UserUpdateWithoutStoriesDataInput
  upsert: UserUpsertWithoutStoriesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutStoriesDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutStoriesInput {
  update: UserUpdateWithoutStoriesDataInput!
  create: UserCreateWithoutStoriesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  stories_every: StoryWhereInput
  stories_some: StoryWhereInput
  stories_none: StoryWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    