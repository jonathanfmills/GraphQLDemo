import {
  makeExecutableSchema
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Person {
  id: ID!,
  travel: [Travel],
  housing: [Housing]
}

type Travel {
  id: ID!,
  carrier: String
}

type Housing {
  id: ID!,
  location: String
}

type Query {
  people: [Person] # "[]" means this is a list of Channels
  person(id: ID!): Person
}`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema, typeDefs, resolvers };
