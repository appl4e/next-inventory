import { ApolloClient, InMemoryCache } from "@apollo/client";
export const apolloClient = new ApolloClient({
	uri: "https://inventory-api.rayhan.dev/graphql",
	cache: new InMemoryCache(),
});
