'use client'

import { Button } from '@/app/components'
import { ButtonProps } from '@/app/components/Button'
import { Chain } from '@/app/config/types'
import { useNetwork } from '@/app/lib/wallet/hooks'

export type NetworkSwitchProps = ButtonProps & {
  sourceChain: Chain
  onSubmit?: () => void
}
export const NetworkSwitch = ({
  sourceChain,
  disabled,
  ...props
}: NetworkSwitchProps) => {
  const { switchNetwork, isLoading, chain } = useNetwork()
  const wrongSourceChain = chain?.id !== sourceChain.id

  return (
    <Button
      className='w-full'
      size='lg'
      disabled={disabled || isLoading}
      onClick={() => (wrongSourceChain ? switchNetwork?.(sourceChain.id) : {})}
      {...props}
    >
      {wrongSourceChain ? 'Switch Network' : 'Bridge'}
    </Button>
  )
}

export default NetworkSwitch
