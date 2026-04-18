import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = useQueryClient();

export function usePostLogin() {
  return useMutation({
    mutationKey: ['postLogin'],
    mutationFn: async () => {
      const { data } = await axios.post('');
      return data;
    },
  });
}
