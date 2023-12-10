import { type HTMLProps } from 'react'
import Link from 'next/link'
import appConfig from '@/app.config'
import { Text } from './typography'

export const Logo = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Link
        title={appConfig.name}
        className='select-none text-xl'
        href='/'
        translate='no'
      >
        <h1 className='flex items-baseline space-x-px text-white'>
          <Text size='xl'>Prysm</Text>
          <Text size='xs' className='text-sky-50'>
            .Bridge
          </Text>
        </h1>
      </Link>
    </div>
  )
}

export default Logo
