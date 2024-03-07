import { ApolloClient, InMemoryCache } from "@apollo/client";

// Create a new Apollo Client
export const createClient = () => {
    const client = new ApolloClient({
        uri: process.env.APOLLO_URI,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `apikey ${process.env.STEPZEN_KEY}`
        }
    });

    return client;
}