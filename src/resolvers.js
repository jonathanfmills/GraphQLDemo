import chalk from 'chalk';

const debug = require('debug')('app:resolvers');

const person = [{
  id: 12345,
  name: 'Jon'
}];

const travel = [{
  id: 123,
  carrier: 'Delta'
}];

const housing = [{
  id: 431,
  location: 'Marriott'
}];

const resolvers = {
  Query: {
    people: () => {
      debug(chalk.blue('Person'));
      return person;
    }
  },
  Person: {
    travel(parent, args){
      debug(chalk.blue('Travel'));
      return travel;
    },
    housing(parent, args){
      debug(chalk.blue('Housing'));
      return housing;
    }
  }
};

export default resolvers;
