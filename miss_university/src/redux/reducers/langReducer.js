import {
    SET_LANG_CODE,
    // SET_QR_CODE,
    // SET_EXIT
} from "../types/types"

const initialState = {
    //   langCode: '',
  langCode: 'en',
}
  
export const langReducer = (state = initialState, action) => {
const { type, payload } = action;

switch (type) {
    case SET_LANG_CODE: {
    return {
        ...state,
        langCode: payload.langCode
    };
    }
//   case SET_QR_CODE: {
//     return {
//       ...state,
//       qrCode: payload.qrCode
//     };
//   }    
//   case SET_EXIT: {
//     return {
//       ...state,
//       exitGbn: payload.exitGbn
//     };
//   }        
    default:
    return state;
}
}
  
  
  