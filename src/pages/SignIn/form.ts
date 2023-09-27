import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty('O campo e-mail é obrigatório!')
    .email('Insira um e-mail válido!'),
  password: z
    .string()
    .nonempty('O campo senha é obrigatório!')
    .min(6, 'A senha deve possuir no mínimo 6 caracteres!'),
})

export type SignInFormProps = z.infer<typeof signInSchema>
