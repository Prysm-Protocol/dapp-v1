import { type HTMLProps } from 'react'
import Link from 'next/link'
import appConfig from '@/app.config'
import Image from 'next/image'

export const Logo = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Link
        title={appConfig.name}
        className='select-none text-xl'
        href='/'
        translate='no'
      >
        <Image
          src='/assets/images/logo.png'
          alt={appConfig.name}
          width={150}
          height={30}
        />
      </Link>
    </div>
  )
}

export default Logo
