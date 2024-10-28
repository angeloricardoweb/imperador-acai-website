'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import useSWR from 'swr'
import { Loader2 } from 'lucide-react'
import { getPartner } from '@/services/prismicData/getPartner'
import { Button } from '../Buttons/Button'
import Link from 'next/link'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { Fade } from 'react-awesome-reveal'

export default function SectionPartner() {
  const { stringData } = useLang()
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
    <section className="py-20 bg-[url('/img/baldes.png')] bg-cover md:aspect-[1400/490] bg-no-repeat mt-2 relative">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
      <div className="relative z-10">
        <Container>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="col-span-2">
              <Fade>
                <h2 className="text-5xl md:text-7xl font-bold text-white">
                  {data?.data.titulo}
                </h2>
              </Fade>
              <div className="mt-5 mb-5 md:mb-12 text-xl">
                <p className="text-white">{data?.data.descricao}</p>
              </div>
              <Link href="/fale-conosco">
                <Button variant="primaryGreen">
                  {stringData(langData.sejaUmDistibuidor)}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
