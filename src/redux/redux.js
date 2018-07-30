import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'

const addExpense = ({description = '',note='',amount=0, createdAt= 0} = {}) =>({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid()
    }
});
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, update) => ({
    type:'EDIT_EXPENSE',
    id,
    update
});

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) =>{
    switch(action,type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
            break;
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
            break;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                else{
                    return expense;
                }
            })
        default:
         return state;
    }
}

const setTextFilter = (text='') => ({
    type:SET_TEXT_FILTER,
    text
});

const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

const setStartDate = (date = undefined) =>({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date =undefined) =>({
    type: 'SET_END_DATE',
    date
});

const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};
const filterReduser = (state = filterReducerDefaultState, action =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text:action.text}
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.date
            }
        default:
        return state;
    }
});

const getVisibleExpense = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1;
        }
      });
};
const store = createStore(
    combineReducers({
        expense:expenseReducer,
        filters:filterReduser
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expense,state.filter);
    console.log(visibleExpense);
})

const demoState = {
    expense:[{
        id:'shdajshday',
        description:'January rent',
        Note:'this is last installment',
        amount: 12000,
        createdAt:0
    }],
    filters:[{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined

    }]
};