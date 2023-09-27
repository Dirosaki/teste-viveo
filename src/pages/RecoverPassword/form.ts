import { z } from 'zod'

export const recoverPasswordSchema = z.object({
  email: z
    .string()
    .nonempty('O campo e-mail é obrigatório!')
    .email('Insira um e-mail válido!'),
})

export type RecoverPasswordFormProps = z.infer<typeof recoverPasswordSchema>
