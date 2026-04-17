import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export function usePostLogin() {
  return useMutation({
    mutationKey: ['postLogin'],
    mutationFn: async () => {
      const { data } = await axios.post('');
      return data;
    },
  });
}
