import { gql } from "apollo-boost";
import { client } from "../.";


export const GET_CURRENCY = gql`
  query getCurrency {
    currencies {
      label
      symbol
    }
  }
`;

export const getCurrency = () => {
    return client.query(
        { query: GET_CURRENCY })
        .then(ApolloQuery => {
            let currency = {}
            ApolloQuery.data.currencies.forEach((element) => {
                currency[element.symbol] = element.label;
            });
            return currency
        })
        .catch(e => console.log(e))

}