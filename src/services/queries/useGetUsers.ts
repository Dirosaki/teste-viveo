import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { api } from 'services/api'

import { UserProps, Results } from './types'

const QUERY_KEY = 'users'

export const useGetUsers = (options?: UseQueryOptions<Results[]>) => {
  return useQuery<Results[]>(
    [QUERY_KEY],
    async () => {
      const { data } = await api.get<UserProps>('/', {
        params: {
          results: 50,
          nat: 'br',
        },
      })

      return data.results
    },
    options
  )
}
