
import { createStore } from 'redux'

const initState = {
  hoVaTen: "ABC",
  soTienDangCo: 300000
}

function Reducer1(state = initState, action) {
  if (action.type === "GUI_TIEN") {
    return {
      ...state,
      soTienDangCo: state.soTienDangCo + action.data,
    };
  }
  if (action.type === "RUT_TIEN") {
    return {
      ...state,
      soTienDangCo: state.soTienDangCo - action.data,
    };
  }
  if (action.type === "DONG_TAI_KHOAN") {
    return {
        ...state,
      soTienDangCo: 0,
    };
  }else{
      return{
        ...state
  }
  }
}

const store = createStore(Reducer1, initState)

export default store