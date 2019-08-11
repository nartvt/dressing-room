import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import FilterReducer from './FilterReducer';
import ModelReducer from './ModelReducer';


const RootPreducer = combineReducers({
  // state store for save
  products: ProductReducer,
  filter: FilterReducer,
  model: ModelReducer
});
export default RootPreducer;