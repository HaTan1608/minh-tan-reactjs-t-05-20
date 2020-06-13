import { createStore } from 'redux'
import ProductReducer from './pages/Main/Main.reducer'

const store = createStore(ProductReducer, {})

export default store
