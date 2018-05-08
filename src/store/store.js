import {createStore} from 'redux';
import {ButtonReducer} from '../reducers/Treducer';
export const store = createStore(ButtonReducer); 
store.subscribe(()=>{
    console.log(store.getState());
})