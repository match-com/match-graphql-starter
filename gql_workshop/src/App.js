import React from 'react';
import './App.css';

// GraphQL imports
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';

import CountriesDisplay from './countries-display/countries-display';
// import ErrorDisplay from './error-display/error-display';
// import LoadingDisplay from './loading-display/loading-display';

function App() {
  return (
    <div className='App'>
      <CountriesDisplay countriesData={[]} />
    </div>
  );
}

export default App;
