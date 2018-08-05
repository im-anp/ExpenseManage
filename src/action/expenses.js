import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) =>({
    type:'ADD_EXPENSE',
    expense
});

export const startAddExpense =(expenseData = {}) =>{
    return (dispatch, getState) => {
       const uid = getState().auth.uid;
        const {description = '',note='',amount=0, createdAt= 0} = expenseData;
        const expense = {description,note,amount,createdAt};
        database.ref(`user/${uid}/expenses`).push(expense).then((ref) =>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        });
    };
};
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id}={})=>{
    return (dispatch,getState) =>{
        const uid = getState().auth.uid;
        database.ref(`user/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        }
        )
    };

}

export const editExpense = (id, update) => ({
    type:'EDIT_EXPENSE',
    id,
    update
});

export const startEditExpense = (id,update) =>{
    return (dispatch,getState) =>{
        const uid = getState().auth.uid
        database.ref(`user/${uid}/expenses/${id}`).update(update).then(()=>{
            dispatch(editExpense(id,update));
        })
    }
}

//Set Expenses
export const setExpense =(expense) => ({
    type:'SET_EXPENSE',
    expense
});

export const startSetExpense = () =>{
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        return database.ref(`user/${uid}/expenses`).once('value').then((snapshot) =>{
            const expenses = [];
            snapshot.forEach((childSnapshot) =>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpense(expenses));

        });
    }
}