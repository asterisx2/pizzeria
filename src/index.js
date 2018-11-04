import React from 'react';
import ReactDOM from 'react-dom';
import { 
   createStore, 
   combineReducers,
} from 'redux';
import pizzeriaApp from './reducers';
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore(
   combineReducers({
     cart: pizzeriaApp,
   }),
);

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <div className="h-100 rootdiv">
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/cart' component={CartContainer} />
         </div>
      </Router>
   </Provider>,
   document.getElementById('root'),
);
