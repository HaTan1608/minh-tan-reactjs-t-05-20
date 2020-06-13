import * as actionTypes from './Register.action.js'

const initState = {
    data: null,
    loading: false,
    error: null
  }
  
  function RegisterReducer(state = initState, action) {
    switch(action.type) {
      case actionTypes.REGISTER_REQUEST:
        return {
          ...state,
          loading: true
        }
  
      case actionTypes.REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data
        }
  
      case actionTypes.REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        }
  
      default:
        return state
    }
  }
  
  export default RegisterReducer