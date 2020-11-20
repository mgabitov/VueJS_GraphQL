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
    // We disable the Apollo cache here because we use Vuex as a single source of truth
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only'
        }
    }
});
