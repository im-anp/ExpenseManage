import * as firebase from 'firebase';
import * as expensesAction from '../action/expenses';

const config = {
    apiKey: "AIzaSyCh-vRqDB9lAg5-eFrzuW98TGIjLI-GJT8",
    authDomain: "yourexpense-29701.firebaseapp.com",
    databaseURL: "https://yourexpense-29701.firebaseio.com",
    projectId: "yourexpense-29701",
    storageBucket: "yourexpense-29701.appspot.com",
    messagingSenderId: "404486900764"
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase ,googleAuthProvider, database as default};

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').push({
//     description:'House Rent',
//     note:'',
//     amount:1200,
//     createdAt:263636366362
// });
// database.ref('expenses').push({
//     description:'Food Bil',
//     note:'',
//     amount:3000,
//     createdAt:2636363663452
// })
// // // get data single time
// // database.ref('location').once('value')
// // .then((snapshot)=>{
// //     console.log(snapshot.val())
// // })
// // .catch((e)=>{
// //     console.log('fetching Data Error',e);
// // });

// // database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// })
// setTimeout(()=>{
//     database.ref('age').set(29);
// },10000)
// firebase.database().ref().set({
//     name: 'Anoop singh',
//     age: 26,
//     isSingle: true,
//     location:{
//         city:'noida',
//         country:'India'
//     }
// }).then(()=>{
//     console.log('Data is Set');
// }).catch((e)=>{
//     console.log('this failed',e);
// });

// database.ref().update({
//     name:'Anshika',
//     age:23,
//     job:'software developer',
//     isSingle:null,
//     'location/city':'patna'

// })

// // database.ref('age').set(27);
// database.ref().remove().then(()=>{
//     console.log('data removed succesfully');
// }).catch((e)=>{
//     console.log(e);
// })