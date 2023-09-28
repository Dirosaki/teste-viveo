import { Card } from './components'
import { useHome } from './hooks/useHome'

const Home = () => {
  const { users } = useHome()

  return (
    <main className="flex flex-col items-center justify-center min-h-full gap-6 p-4 h-max bg-zinc-100">
      <h1 className="text-2xl font-medium text-zinc-700 lg:text-3xl">
        Contatos
      </h1>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {users?.map((user) => <Card key={user.login.uuid} user={user} />)}
      </div>
    </main>
  )
}

export default Home
