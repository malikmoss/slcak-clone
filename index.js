import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers'
import models from './models'

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const app = express();
const graphqlEndpoint = 'graphql';

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

models.sequelize.sync().then(x => {
app.listen(8081);
});