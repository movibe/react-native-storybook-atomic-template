import * as React from 'react'

import { Loading } from '../../../atomic/atoms/Loading'

export default {
  title: 'Atoms/Loading',
}

export const normal = () => <Loading />
export const small = () => <Loading size='small' />
export const large = () => <Loading size='large' />
