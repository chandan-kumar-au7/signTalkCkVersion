import {
  INPUT_ON_CHANGE,
  LOG_MODAL,
  PHONE_MODAL,
} from "../../ActionTypes/Client/onBoardActionTypes";

const initialState = {
  phoneModal: false,
  logModal: false,
  background: "",
  langugae: "",
  region: "",
  type: "",
  meeting: "",
  languages: "",
  contractDue: {
    durationhr: "",
    durationm: "",
    startDate: "01-01-2021",
    endDate: "02-01-2021",
    interpreters: 1,
    amount: 600,
    description: "",
  },
  shortDue: {
    address1: "",
    address2: "",
    durationhr: "",
    durationm: "",
    startDate: "01-01-2021",
    bookingTime: "00:00",
    interpreters: 1,
    amount: 1500,
    description: "",
  },
};

const onBoardReducer = (state = initialState, Action) => {
  const { type, payload } = Action;
  switch (type) {
    case INPUT_ON_CHANGE:
      return {
        ...state,
      };
    case PHONE_MODAL:
      return {
        ...state, phoneModal : payload
      };
    case LOG_MODAL:
      return {
        ...state, payload : payload
      };
    default:
      return state;
  }
};

export default onBoardReducer;
