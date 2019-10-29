import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import SearchDependency from "./containers/Search/Search";

class App extends React.Component {
  render() {
    return (
        <div>
          <Layout>
            <SearchDependency />
          </Layout>
        </div>
    );
  }
}

export default App;
