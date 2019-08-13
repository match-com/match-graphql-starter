import React from 'react';
import './App.css';

// GraphQL imports
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import CountriesDisplay from './countries-display/countries-display';
import ErrorDisplay from './error-display/error-display';
import LoadingDisplay from './loading-display/loading-display';

const COUNTRIES_QUERY = gql`
  query {
    countries {
      code
      name
      currency
      languages {
        name
        native
      }
      emoji
    }
  }
`;

function App() {
  return (
    <div className='App'>
      <Query query={COUNTRIES_QUERY}>
        {({ data, loading, error}) => {
          if (error) return <ErrorDisplay />;
          if (loading) return <LoadingDisplay />;
          return <CountriesDisplay countriesData={data} />
        }}
      </Query>
    </div>
  );
}

export default App;
