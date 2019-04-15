import express from 'express';
import chalk from 'chalk';
import { schema } from './src/schema';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';

const debug = require('debug')('app');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('tiny'));

const apollo = new ApolloServer({ 
  schema
});

apollo.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  debug(chalk.green(`GraphQL listening on port ${PORT}`));
});
