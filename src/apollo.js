import { split, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import { createConsumer } from '@rails/actioncable';
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink';

const cable = createConsumer('ws://localhost:3000/cable')

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
})
const hasSubscriptionOperation = ({ query: { definitions } }) => {
  return definitions.some(
    ({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription'
  )
}

const link = split(
  hasSubscriptionOperation,
  new ActionCableLink({ cable }),
  httpLink
);

export const client = new ApolloClient({ link, cache: new InMemoryCache() })
