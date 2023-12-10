import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import { Logo, Loading } from '@/app/components'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  ssr: false,
  loading: () => <Loading className='w-8' />
})

export const Header = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <header
      {...props}
      className={classNames(className, 'border-b border-white/20 container')}
    >
      <div
        className={classNames(
          'flex items-center justify-between rounded-xl py-2'
        )}
      >
        <Logo />
        <div className='flex items-center space-x-4'>
          <Wallet className='box-content' />
        </div>
      </div>
    </header>
  )
}

export default Header
