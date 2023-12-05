
import { useReducer } from 'react';
import './App.css';


// initial state 
const initialState = {
  loading: false,
  error: null,
  data: [],

}

// reducer function that is used inside the useReducer
const reducerFnc = (state, action) => {

  console.log('reducerFnc', state, action)

  switch (action.type) { // switch statement for the actions (action.type)
    case 'getArticleStart': // this is the case action
      return{ // return an object which is the initial state
        ...state, // spread in the original state
        loading: true // update the object entry as required
      }
  
    default: // by default we must return the state from the function
      return state
  }

}

function App() {

  const [state, dispatch] = useReducer(reducerFnc, initialState);
  console.log('render', state)

  return (
    <div className="App">
      <button onClick={() => dispatch({type: 'getArticleStart'})}>Get Articles</button>
    </div>
  );
}

export default App;
