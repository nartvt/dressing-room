import ConstUtils from '../../Const/ConstUtils';

let initalState = {
  byType: ''
}
const FilterReducer = (state= initalState,action) =>{
  switch(action.type){
    case ConstUtils.ACTION.SET_FILTER_BY_TYPE:
      state.byType= action.payload;
      return {...state}; // return to new state, shallow comparision, type imutable
    default: 
      return state;
  }
}

export default FilterReducer;