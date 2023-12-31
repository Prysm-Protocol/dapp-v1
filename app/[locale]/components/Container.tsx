'use client'

import { Card } from '@/app/components'
import { allowedChainsConfig } from '@/app/config/config'
import { useMemo, useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'
import { Requirements } from './Requirements'
import { Form } from './Form'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ethers } from 'ethers'
import { useNetwork } from '@/app/lib/wallet/hooks'

export const CrosschainNFTBridgeAppIdMumbai =
  '0x3581ded89c04be046f61dbf380aff24bbb4d1866010c64302ad872e61a44c06023000000'

export const CrosschainNFTBridgeAppIdFuji =
  '0xd53a723850e67d08016c7d6f115d60d59bc9c6bd6a8c75875bb6f15719ee8d6a00000000'

const [mumbai, fuji] = [allowedChainsConfig[80001], allowedChainsConfig[43113]]

export const PageContainer = () => {
  const [chains, setChains] = useState([mumbai, fuji])
  const { chain } = useNetwork()

  const sourceChain = useMemo(() => chains[0], [chains])
  const destinationChain = useMemo(() => chains[1], [chains])

  const handleSwitch = () => {
    setChains((currentChains) => [currentChains[1], currentChains[0]])
  }

  const methods = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(
      z.object({
        erc721Address: z.string().refine((v) => ethers.isAddress(v)),
        erc721TokenId: z.string().refine((v) => v.length > 0)
      })
    )
  })

  useEffectOnce(() => {
    const sourceChainId = chain?.id === mumbai.id ? mumbai.id : fuji.id
    const destinationChainId = sourceChainId === mumbai.id ? fuji.id : mumbai.id

    setChains(() => [
      allowedChainsConfig[sourceChainId],
      allowedChainsConfig[destinationChainId]
    ])
  })

  return (
    <div className='flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md  lg:w-auto lg:min-w-[26rem]'>
      <Card className='flex flex-col space-y-4 p-4'>
        <FormProvider {...methods}>
          <Form
            onSwitch={handleSwitch}
            sourceChain={sourceChain}
            destinationChain={destinationChain}
          />
        </FormProvider>
        <div className='flex justify-end'>
          <Requirements />
        </div>
      </Card>
    </div>
  )
}

export default PageContainer
