
import { createStore } from 'redux'

const initialState = {
   estructures: [
      {
         type: '',
         data: '',
      }
   ]
}


const reduceEstructures = (state = initialState, action ) => {
   switch (action.type){
      case 'SET_PRODUCTS':
         return { ...state, estructures: action.payload }
      default: 
         return state
   }
}

export const store = createStore(reduceEstructures)
