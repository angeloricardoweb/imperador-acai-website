'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import useSWR from 'swr'
import { getSustentability } from '@/services/prismicData/getSustentability'
import { Loader2 } from 'lucide-react'
import ContentRichTextWhite from '../Prismic/ContentRichTextWhite'

export default function SectionSustentabilidade() {
  const { data, error, isLoading } = useSWR('getSustentability', async () => {
    const response = await getSustentability()
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
    <section className="py-20 bg-[url('/img/onca.png')] bg-cover bg-right">
      <Container>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <h2 className="text-7xl text-center font-bold text-white">
              {data?.data.titulo}
            </h2>
            <div className="mt-5 mb-12">
              <div className="text-white">
                <ContentRichTextWhite data={data?.data.conteudo} />
              </div>
              {/* <Link href="/sobre-nos#sustentabilidade">
                <Button variant="primaryGreen">Veja mais</Button>
              </Link> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
