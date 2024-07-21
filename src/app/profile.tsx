import { useAccount, useEnsName } from 'wagmi'

export function Profile() {
  const { address } = useAccount()
  // const address = '0xf4030DdD79fc7Fd49b25C97691' as `0x${string}` ;
  // Get paid to have Ens address for $7 for some years the use address details here.

  const { data, error, status } = useEnsName({ address })
  if (status === 'pending') return <div>Loading ENS name</div>
  if (status === 'error')
    return <div>Error fetching ENS name: {error.message}</div>
  return <div>ENS name: {data}</div>
}