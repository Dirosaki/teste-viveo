import { Divider } from '@mui/material'

import { Results } from 'services/queries/types'

type CardProps = {
  user: Results
}

export const Card = ({ user }: CardProps) => {
  return (
    <div className="relative grid grid-cols-[96px_1fr] gap-3 p-4 bg-white rounded shadow lg:grid-cols-[128px_1fr] lg:gap-4">
      <div className="relative flex overflow-hidden rounded shadow">
        <img
          alt={user.name.first}
          className="object-cover"
          src={user.picture.large}
        />
      </div>

      <div className="flex flex-col gap-1 overflow-hidden text-sm text-zinc-500 lg:text-base">
        <strong className="text-base text-zinc-700 lg:text-xl">
          {user.name.first} {user.name.last}
        </strong>

        <Divider className="bg-[#8257e5]" />

        <span className="overflow-hidden text-ellipsis" title={user.email}>
          {user.email}
        </span>
        <span>{user.cell}</span>
        <span className="overflow-hidden text-ellipsis">
          {user.location.state} - {user.location.country}
        </span>
      </div>
    </div>
  )
}
