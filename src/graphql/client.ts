import { GraphQLClient } from "graphql-request"


const api = process.env.GRAPHQL_HOST || ''


const client = new GraphQLClient(api,{
    headers:{
        authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
    }
})

export default client