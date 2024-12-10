import { legacy_createStore as createStore, combineReducers,applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'



export default function reduce() {


  const mathReducer = (state={
    result: 1,
    lastValues: [],
    username:"Chocs"
  },action) => {
    switch(action.type){
      case "ADD":
        state = {
          ...state,
          result: state.result + action.payload,
          lastValues: [...state.lastValues,action.payload]
        }
        break;
      case "SUB":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues,action.payload]
        }
        break;
        default:
          return state;
    }
    return state
  }

  const userReducer = (state={
    username:"Kevo",
    age:27
  },action) => {
    switch(action.type){
      case "SET_NAME":
        state = {
          ...state,
          username: "Max"
        }
        
        break;
      case "SET_AGE":
        state = {
          ...state,
          age:action.payload
        }
        break;
        default:
          return state;
    }
    return state
  }

  const logger = createLogger()

  const store = createStore(combineReducers({mathReducer,userReducer}), {}, applyMiddleware(logger));

  store.subscribe(()=>{
    console.log('Store update!',store.getState());
  })
  
  store.dispatch(
    {
      type:"ADD",
      payload:100
    }
  )

  store.dispatch(
    {
      type:"SET_NAME",
      payload:50
    }
  )

  store.dispatch(
    {
      type:"SUB",
      payload:50
    }
  )

  store.dispatch(
    {
      type:"SET_AGE",
      payload:50
    }
  )
  
  store.dispatch(
    {
      type:"ADD",
      payload:100
    }
  )

}
