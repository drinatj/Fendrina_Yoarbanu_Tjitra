import { gql } from "@apollo/client";


export const listCurrencies = gql`
{
  currencies
}`

export const listItems = gql`
  {
    category{
      products{
        id
        name
        prices{
          currency
          amount
        }
        gallery
        category
        inStock
      }
    }
  }
`;

export const detailCatalogs = gql`
query Product($id: String!){
  product(id: $id){
    id
    name
    inStock
    gallery
    description
    category
    attributes{
      id
      name
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency
      amount
    }
    brand
  }
}`;
