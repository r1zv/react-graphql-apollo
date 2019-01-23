import React from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";
const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
return data.rates.map(({ currency, rate, name }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}(${name})`}</p>
        </div>
      ));
    }}
  </Query>
);
export default ExchangeRates;