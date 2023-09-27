import { CircularProgress, FormControl, Snackbar, Stack } from '@mui/material'

import { AuthContainer } from 'layouts'

import { Button, HelperText, Link, TextField } from 'components'

import { useRecoverPassword } from './hooks/useRecoverPassword'

const RecoverPassword = () => {
  const { register, isSubmitting, errors, handleSubmit, toast, closeToast } =
    useRecoverPassword()

  return (
    <AuthContainer
      description="Insira seu e-mail para enviarmos um link para redefinição de senha"
      title="Recuperar senha"
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
          <Button isLoading={isSubmitting} type="submit">
            {isSubmitting ? <CircularProgress size={24} /> : 'Enviar link'}
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
          Link enviado com sucesso!
        </div>
      </Snackbar>
    </AuthContainer>
  )
}

export default RecoverPassword
