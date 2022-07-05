import { gql } from "apollo-boost";
import { client } from "../.";

export const GET_ALL_CATEGORIES = gql`
  query getAllCategories {
    categories {
      name
    }
  }
`;

export const GET_CATEGORY_IDS = gql`
  query getCategoryIDs($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
      }
    }
  }
`;

export const getAllCategories = () => {
    return client.query(
        { query: GET_ALL_CATEGORIES })
        .then(ApolloQuery => ApolloQuery.data.categories.map(category => category.name))
        .catch(e => console.log(e))
}

export const getCategoryIDs = category => {
    return client.query({
        query: GET_CATEGORY_IDS,
        variables: { title: category }
    })
        .then(ApolloQuery => ApolloQuery.data.category.products.map(product => product.id))
        .catch(e => console.log(e))
}