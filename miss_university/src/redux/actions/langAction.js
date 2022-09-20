import {
    SET_LANG_CODE,
    // SET_QR_CODE,
    // SET_EXIT
} from "../types/types"


export const setLangCode = (param) => {
return {
    type: SET_LANG_CODE,
    payload: {
    langCode: param.langCode,
    },
};
};

// export const setQrCode = (param) => {
//     return {
//       type: SET_QR_CODE,
//       payload: {
//         qrCode: param.qrCode,
//       },
//     };
//   };
  
//   export const setExit = (param) => {
//     return {
//       type: SET_EXIT,
//       payload: {
//         exitGbn: param.exitGbn,
//       },
//     };
//   };