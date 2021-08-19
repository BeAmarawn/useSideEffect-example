import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { getRandomColorService } from '@/services/ColorGenerator';
import { COLOR_GENERATOR } from './types';
import { RandomColorInterface } from '@/interfaces/RandomColor';

const getRandomColorRequest = {
  type: COLOR_GENERATOR.GET_RANDOM_COLOR_REQUEST,
};
const getRandomColorSuccess = (payload: RandomColorInterface) => ({
  type: COLOR_GENERATOR.GET_RANDOM_COLOR_SUCCESS,
  payload,
});
const getRandomColorError = (error: Error) => ({
  type: COLOR_GENERATOR.GET_RANDOM_COLOR_ERROR,
  error,
});

const getRandomColor = () => (dispatch: Dispatch) => {
  dispatch(getRandomColorRequest);

  return getRandomColorService({
    onSuccess: (payload: RandomColorInterface) => dispatch(getRandomColorSuccess(payload)),
    onError: (error: Error) => {
      dispatch(getRandomColorError(error));
    },
  });
};

export default () => {
  const dispatch = useDispatch();

  return {
    getRandomColor: () => dispatch(getRandomColor()),
  };
};
