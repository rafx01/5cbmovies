import z from 'zod';

export const loginSchema = z.object({
  login: z
    .email({
      error: 'Campo obrigatório',
    })
    .trim(),

  password: z
    .string({
      error: 'Campo obrigatório',
    })
    .trim(),
});
