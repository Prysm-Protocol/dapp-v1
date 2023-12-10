'use client'

import { type ReactNode } from 'react'
import classNames from 'classnames'
import { Registry } from '@/app/registry'
import { Header, Footer } from '@/app/components'
import { Provider as WalletProvider } from '@/app/components/wallet'
import { Provider as LanguageProvider } from '@/app/components/language'

export type BaseLayoutProps = {
  children: ReactNode
  params: { locale: string }
}

export default function BaseLayout({ children, params }: BaseLayoutProps) {
  return (
    <WalletProvider>
      <LanguageProvider locale={params.locale}>
        <Registry>
          <div>
            <div
              className={classNames(
                'flex min-h-screen flex-col',
                'h-screen overflow-x-hidden text-sm font-medium',
                'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700'
              )}
            >
              <Header />
              <main className='flex-1 py-6 container'>{children}</main>
              <Footer className='py-4' />
            </div>
          </div>
        </Registry>
      </LanguageProvider>
    </WalletProvider>
  )
}
