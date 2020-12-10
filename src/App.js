import './App.css';
import NavSearch from './components/NavSearch';
import Header from './containers/Header';
import ListRepo from './containers/ListRepo';
import ListUsers from './containers/ListUsers';

import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store'


function App() {
  return (
    <Router>
      <Provider store ={store}>
        <Header/>
        <NavSearch/>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/user' component={ListUsers}/>
          <Route exact path='/repo/' component={ListRepo}/>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
