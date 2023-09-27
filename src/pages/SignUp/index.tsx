import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Stack,
  CircularProgress,
  FormControl,
  InputAdornment,
  IconButton,
  Snackbar,
} from '@mui/material'

import { AuthContainer } from 'layouts'

import { Button, HelperText, Link, TextField } from 'components'

import { useSignUp } from './hooks/useSignUp'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    showPassword,
    handleToggleShowPassword,
    toast,
    closeToast,
  } = useSignUp()

  return (
    <AuthContainer
      description="Cadastre seu e-mail e senha para acessar o sistema"
      title="Cadastre-se"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl>
            <TextField
              label="E-mail"
              placeholder="Digite seu e-mail"
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
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              type={showPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
            />
            <HelperText>{errors.confirmPassword?.message}</HelperText>
          </FormControl>

          <Button isLoading={isSubmitting} type="submit">
            {isSubmitting ? <CircularProgress size={24} /> : 'Cadastrar'}
          </Button>
        </Stack>
      </form>

      <p className="block mt-8 text-center text-zinc-700">
        Já possuí uma conta? <Link to="/signin">Entrar</Link>
      </p>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2500}
        onClose={closeToast}
        open={toast}
      >
        <div className="px-4 py-2 bg-white rounded shadow text-zinc-700">
          Cadastro realizado com sucesso!
        </div>
      </Snackbar>
    </AuthContainer>
  )
}

export default SignUp
