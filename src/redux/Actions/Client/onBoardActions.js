import {
  INPUT_ON_CHANGE,
  LOG_MODAL,
  PHONE_MODAL
} from "../../ActionTypes/Client/onBoardActionTypes";

export const inputOnChange = data => (dispatch) => {
  dispatch({
    type: INPUT_ON_CHANGE,
    payload: data,
  });
};

export const setLogModal = data => (dispatch) => {
  dispatch({
    type: LOG_MODAL,
    payload: data,
  });
};

export const setPhoneModal = data => (dispatch) => {
    dispatch({
      type: PHONE_MODAL,
      payload: data,
    });
  };
