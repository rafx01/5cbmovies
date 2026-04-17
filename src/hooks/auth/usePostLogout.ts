import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export function usePostLogout() {
  return useMutation({
    mutationKey: ['postLogout'],
    mutationFn: async () => {
      const { data } = await axios.post('');
      return data;
    },
  });
}
