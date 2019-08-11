import ConstUtils from "../../Const/ConstUtils";

let initalState = {
  topclothes: '',
  botclothes: '',
  shoes: '',
  handbags: '',
  necklaces: '',
  background: ''
}
const ModelReducer = (state = initalState, action) => {
  switch (action.type) {
    case ConstUtils.ACTION.SET_MODEL:
      return { ...state, [action.payload.type]: action.payload.imgPath };
    case ConstUtils.ACTION.SET_ALL: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}
export default ModelReducer;