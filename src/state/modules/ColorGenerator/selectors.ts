import { useSelector } from 'react-redux';
import { RandomColorInterface } from '@/interfaces/RandomColor';

export const useSelectRandomColor = () =>
  useSelector(
    ({
      colorGenerator,
    }: {
      colorGenerator: { color: RandomColorInterface; isLoadingRandomColor: boolean; error?: Error };
    }) => colorGenerator.color
  );
