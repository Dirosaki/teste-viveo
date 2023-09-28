import { useGetUsers } from 'services/queries/useGetUsers'

export const useHome = () => {
  const { data: users, isLoading } = useGetUsers()

  return { users, isLoading }
}
