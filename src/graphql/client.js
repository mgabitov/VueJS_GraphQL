import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'https://fleet-marmoset-99.hasura.app/v1/graphql'
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only'
        }
    }
});
