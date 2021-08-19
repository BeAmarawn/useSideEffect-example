import axios from 'axios';

type Handlers = {
  onSuccess: (response: any) => void;
  onError: (error: Error) => void;
};

export const getRandomColorService = async ({ onSuccess, onError }: Handlers) => {
  try {
    const response = await axios(`https://random-data-api.com/api/color/random_color`);

    onSuccess(response.data);
  } catch (error) {
    onError(error);
  }
};
