import { CONTEXT_TYPEs } from "..";

export const utilState = {
  wantToDelete: false,
  method: null,
  id: null,
  type: null,
  image: "",
};

export const utilReducer = (state = utilState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT_TYPEs.REFRESH_UTIL:
      return {
        ...state,
        wantToDelete: false,
        method: null,
        id: null,
        type: null,
        image: "",
      };
    case CONTEXT_TYPEs.DELETE:
      return {
        ...state,
        wantToDelete: !state.wantToDelete,
        method: payload?.method,
        id: payload?.id,
        image: payload?.image,
        type: payload?.type,
      };

    default:
      return state;
  }
};
