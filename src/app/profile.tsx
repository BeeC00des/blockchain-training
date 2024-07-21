import { useAccount, useEnsName } from 'wagmi'

export function Profile() {
  const { address } = useAccount()
  // const address = '0xf4030DdD79fc7Fd49b25C976C5021D07568B4F91' as `0x${string}` ;

  const { data, error, status } = useEnsName({ address })
  if (status === 'pending') return <div>Loading ENS name</div>
  if (status === 'error')
    return <div>Error fetching ENS name: {error.message}</div>
  return <div>ENS name: {data}</div>
}