import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Stack,
  CircularProgress,
  FormControl,
  InputAdornment,
  IconButton,
} from '@mui/material'

import { AuthContainer } from 'layouts'

import { Button, HelperText, Link, TextField } from 'components'

import { useSignIn } from './hooks/useSignIn'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    showPassword,
    handleToggleShowPassword,
  } = useSignIn()

  return (
    <AuthContainer
      description="Insira seu e-mail e senha para entrar"
      title="Login"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl>
            <TextField
              label="E-mail"
              placeholder="Digite seu usuário"
              {...register('email')}
            />
            <HelperText>{errors.email?.message}</HelperText>
          </FormControl>

          <FormControl>
            <TextField
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleToggleShowPassword}
                    size="small"
                  >
                    {showPassword ? (
                      <VisibilityOff
                        className="text-zinc-400"
                        color="inherit"
                        fontSize="small"
                      />
                    ) : (
                      <Visibility
                        className="text-zinc-400"
                        color="inherit"
                        fontSize="small"
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
              placeholder="Digite sua senha"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
            />
            <HelperText>{errors.password?.message}</HelperText>
          </FormControl>

          <Link className="inline-flex mt-4 no-underline" to="/reset-password">
            Esqueci minha senha
          </Link>
          <Button isLoading={isSubmitting} type="submit">
            {isSubmitting ? (
              <CircularProgress
                className="text-white"
                color="inherit"
                size={24}
              />
            ) : (
              'Entrar'
            )}
          </Button>
        </Stack>
      </form>

      <p className="block mt-8 text-center text-zinc-700">
        Não possuí uma conta? <Link to="/signup">Criar conta</Link>
      </p>
    </AuthContainer>
  )
}

export default SignIn
