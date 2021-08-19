import { AnyAction } from 'redux';
import { COLOR_GENERATOR } from './actions/types';

const initialState = {
  color: {},
  isLoadingRandomColor: false,
  error: false,
};

export const colorGeneratorReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case COLOR_GENERATOR.GET_RANDOM_COLOR_REQUEST:
      return {
        ...state,
        error: false,
        isLoadingRandomColor: true,
      };
    case COLOR_GENERATOR.GET_RANDOM_COLOR_SUCCESS:
      return {
        ...state,
        color: action.payload,
        isLoadingRandomColor: false,
      };
    case COLOR_GENERATOR.GET_RANDOM_COLOR_ERROR:
      return {
        ...state,
        isLoadingRandomColor: false,
        error: action.error,
      };

    default:
      return state;
  }
};
