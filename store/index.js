import { createStore } from "redux"

const initialState = {
   estructures: [
      {
         type: "",
         data: "",
      },
   ],
   show: true,
}

const reduceEstructures = (state = initialState, { type, payload }) => {
   switch (type) {
      case "SET_PRODUCTS":
         return { ...state, estructures: payload }
      case "SET_SHOW":
         return { ...state, show: payload }
      default:
         return state
   }
}

export const store = createStore(reduceEstructures)
