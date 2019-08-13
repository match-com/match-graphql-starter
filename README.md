# GraphQL Workshop

## Let's GraphQL
This workshop will get you up and running with a small app that uses GraphQL. For this app, we will be using the Countries API ([https://countries.trevorblades.com/](https://countries.trevorblades.com/)). Visit that URL to visit the Countries API's GraphQL playground. In the playground, you can explore the schema.

1. Clone this repo
2. Run an `install`
3. Create a countries query that gets the following:
	-	code
	-	name
	-	languages (name and native)
	-	currency
	-	emoji
4. Set up a Query component
5. Set up `error` and `loading` states 
6. Pass `data` into `CountriesDisplay` component to render countries data

## Dependencies
This repo already has the necessary dependencies as part of the packages.json. Just run `npm install` or `yarn install` while in the `gql_workshop` folder and your dependencies should install. That said, if you want to start from scratch, you will need the following dependencies:
`apollo-cache-inmemory apollo-client apollo-link-http graphql graphql-anywhere graphql-tag qs react-apollo`
* Note: These dependencies are required for this specific project. As you venture out on other GraphQL projects, your dependencies will vary depending on your needs.
* To use the "freshly out of beta" graphql-hooks from Apollo, you will want to install `@apollo/react-hooks`

## Additional Resources

Official GraphQL Docs: [https://graphql.org/learn/](https://graphql.org/learn/)

Apollo GraphQL Docs: [https://www.apollographql.com/docs/](https://www.apollographql.com/docs/)

How To GraphQL: [https://www.howtographql.com/](https://www.howtographql.com/)

Learning GraphQL (book): [http://shop.oreilly.com/product/0636920137269.do](http://shop.oreilly.com/product/0636920137269.do)

Popular GraphQL APIs: [https://github.com/APIs-guru/graphql-apis](https://github.com/APIs-guru/graphql-apis)

Apollo Client Dev Tools (Chrome extension): [https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US)
