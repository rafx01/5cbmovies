import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export function usePostRegister() {
  return useMutation({
    mutationKey: ['postRegister'],
    mutationFn: async () => {
      const { data } = await axios.post('');
      return data;
    },
  });
}
