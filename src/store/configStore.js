import {createStore,combineReducers, applyMiddleware,compose} from 'C:/Users/anoop-pc/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import expenseReducer from '../reducers/expenses';
import filterReduser from '../reducers/filters';
import authReduser from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhenser= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
      combineReducers({
        expense:expenseReducer,
        filters:filterReduser,
        auth:authReduser
      }),
      composeEnhenser(applyMiddleware(thunk))
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  
    return store;
  };
