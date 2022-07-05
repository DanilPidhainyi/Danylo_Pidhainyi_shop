import { gql } from "apollo-boost";
import { client } from "../.";


export const GET_PRODUCT_ATTRIBUTES = gql`
  query getProductAttributes($id: String!) {
    product(id: $id) {
      id
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
    }
  }
`;

export const GET_PRODUCT_CELL_INFO = gql`
  query getProductCellInfo($id: String!) {
    product(id: $id) {
      id
      name
      brand
      inStock
      gallery
      prices {
        amount
        currency {
          label
          symbol
        }
      }
    }
  }
`;

export const GET_PRODUCT_INFO = gql`
  query getProductInfo($id: String!) {
    product(id: $id) {
      id
      name
      brand
      inStock
      gallery
      description
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
    }
  }
`;



export const getAllAttributes = id => {
    return client.query({
        query: GET_PRODUCT_ATTRIBUTES,
        variables: { id: id },
        fetchPolicy: "network-only"
    })
        .then(ApolloQuery => ApolloQuery.data.product.attributes.map(attribute => attribute.name))
        .catch(e => console.log(e))
}


export const getProductCellInfo = id => {
    return client.query({
        query: GET_PRODUCT_CELL_INFO,
        variables: {id: id},
    })
        .then(ApolloQuery => ApolloQuery.data.product)
        .catch(e => console.log(e))
}


export const getProductInfo = id => {
    return client.query({
        query: GET_PRODUCT_INFO,
        variables: { id: id },
        fetchPolicy: "network-only"
    })
        .then(ApolloQuery => {
            let obj = {}
            ApolloQuery.data.product.attributes.forEach((attribute) => {
                obj[attribute.id] = attribute.items[0].value;
            });
            return {
                data: ApolloQuery.data.product,
                attributes: obj,
            }
        })
        .catch(e => console.log(e))
}





