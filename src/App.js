
import { useReducer, useEffect } from 'react';
import './App.css';
import Items from './Items';


// initial state 
const initialState = {
  loading: false,
  error: null,
  data: [],

}

// reducer function that is used inside the useReducer
const reducerFnc = (state, action) => {

  // console.log('reducerFnc', state, action)

  switch (action.type) { // switch statement for the actions (action.type)
    case 'getArticleStart': // this is the case action
      return{ // return an object which is the initial state
        ...state, // spread in the original state
        loading: true // update the object entry as required
      }
      case 'success':
      return{
        ...state,
        data: action.payload,
        loading: false,
      }
      case 'failed':
        return{
          ...state,
          loading: false,
          error: action.payload
        }
    default: // by default we must return the state from the function
      return state
  }

}


//component
function App() {

  const [state, dispatch] = useReducer(reducerFnc, initialState);
  // console.log('render', state)


  useEffect(() => {
  
    const getData = async() => { // the getdata function

     try {
      //set loading to true using a dispatch action
      dispatch({type: 'getArticleStart'}) // dispatch an action to get th loading to true

      const response = await fetch('https://randomuser.me/api/?results=6');
      const data = await response.json();


      dispatch({ // dispatch an action to get the data
        type: 'success',
        payload: data.results // Payload is the input data. now we are getting a payload, assign the data.results to it
      })
      
     } catch (error) {
        dispatch({ // use a dispatch action to update the error state
          type: 'failed',
          payload: error,
        })
     }

    }
  
    getData()
  }, []);

  return (
    <div className="App">
      <h1>Random Users</h1>

      {state.isLoading && <div>Loading...</div>}
      {state.isLoading && <div>{`Error ${state.error}`}</div>}
      {!state.isLoading && !state.error && <Items details={state.data}/>}

    </div>
  );
}

export default App;
