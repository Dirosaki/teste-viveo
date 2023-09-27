import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link'

type InternalLinkProps = {
  linkType?: 'internal'
} & RouterLinkProps

type ExternalLinkProps = {
  linkType?: 'external'
} & MUILinkProps

type LinkProps = InternalLinkProps | ExternalLinkProps

export const Link = ({ linkType = 'internal', ...props }: LinkProps) => {
  const component = linkType === 'internal' ? RouterLink : MUILink

  return <MUILink component={component} {...props} />
}
