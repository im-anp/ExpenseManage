import {createStore,combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReduser from '../reducers/filters';

export default () => {
    const store = createStore(
      combineReducers({
        expense:expenseReducer,
        filters:filterReduser
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  
    return store;
  };
