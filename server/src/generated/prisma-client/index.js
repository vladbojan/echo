"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Paragraph",
    embedded: false
  },
  {
    name: "Frame",
    embedded: false
  },
  {
    name: "Scene",
    embedded: false
  },
  {
    name: "Story",
    embedded: false
  },
  {
    name: "Note",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://prisma_prisma_1:4466`
});
exports.prisma = new exports.Prisma();
