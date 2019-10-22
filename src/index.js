import React from 'react';
import ReactDOM from 'react-dom';
import client from './apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

const App = () => (
    <ApolloProvider client={client}>
      <div>
        <Router>
            <Route exact path={"/"} component = {Home}/>
            <Route path={"/details"} component = {Detail}/>
        </Router>
      </div>
    </ApolloProvider>
  );

ReactDOM.render(<App />, document.getElementById('root'));
