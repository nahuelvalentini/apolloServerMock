export const typeDefs = `#graphql
  interface BasicProductTransactionData {
    productId: ID!
    price: Int!
    date: Date!
  }

  type Product {
    id: ID
    price: Int
    name: String
    weight: Int
  }

  type Sale implements BasicProductTransactionData {
    productId: ID!
    price: Int!
    date: Date!
    vendorId: ID!
  }

  type ReturnedProduct implements BasicProductTransactionData { 
    productId: ID!
    price: Int!
    date: Date!
    clientId: String
  }

  type Vendor {
    id: ID
    name: String
    lastName: String
    sales: [Sale]
  }

  type Query {
    sales: [Sale]
    vendors: [Vendor]
    vendor(id: ID!): Vendor
    returnedProducts(productId: ID, date: String, price: Int): [ReturnedProduct]
    products(id: ID, name: String, Price: Int): [Product]
    product(id: ID!): Product
  }
`;
