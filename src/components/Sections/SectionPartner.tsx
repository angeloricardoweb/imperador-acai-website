'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import useSWR from 'swr'
import { Loader2 } from 'lucide-react'
import { getPartner } from '@/services/prismicData/getPartner'
import { Button } from '../Buttons/Button'
import Link from 'next/link'

export default function SectionPartner() {
  const { data, error, isLoading } = useSWR('getPartner', async () => {
    const response = await getPartner()
    return response
  })

  if (error) return null
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader2 size={64} className="animate-sping" />
      </div>
    )

  return (
    <section className="py-20 bg-[url('/img/baldes.png')] bg-cover aspect-[1400/490] bg-no-repeat mt-2">
      <Container>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <h2 className="text-7xl font-bold text-white">
              {data?.data.titulo}
            </h2>
            <div className="mt-5 mb-12 text-xl">
              <p className="text-white">{data?.data.descricao}</p>
            </div>
            <Link href="/fale-conosco">
              <Button variant="primaryGreen">Seja um distribuidor</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
