import { ApolloClient, InMemoryCache } from "@apollo/client";

// Create a new Apollo Client
export const getClient = () => {
    const client = new ApolloClient({
        uri: process.env.APOLLO_URI,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `apikey ${process.env.STEPZEN_KEY}`
        }
    });

    return client;
}

// Uri: https://dashboard.stepzen.com/explorer?endpoint=api%2Fweather
// Key: wackersdorf::stepzen.io+1000::961b35cdc4d68e45c859eb2410511fd593090e7aff819deee1637f679ace622b
