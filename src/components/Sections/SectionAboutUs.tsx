'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import { Button } from '../Buttons/Button'
import useLang from '@/hooks/useLang'
import useSWR from 'swr'
import ContentRichText from '../Prismic/ContentRichText'
import { langData } from '@/location/langData'
import { getAboutUsSection } from '@/services/prismicData/getAboutUsSection'

export default function SectionAboutUs() {
  const { stringData } = useLang()

  const { data } = useSWR('getAboutUsSection', async () => {
    const response = await getAboutUsSection()
    return response
  })
  return (
    <Container>
      <section className="py-10 relative">
        <img src="/img/conheca.svg" alt="topo" className="translate-y-10" />
        <div className="md:grid grid-cols-9 gap-0">
          <div className="col-span-5">
            <h2 className="text-5xl md:text-7xl font-bold mt-10">
              {stringData(langData.About)}
            </h2>
            <ContentRichText data={data?.data.conteudo} />
            <div className="mt-5">
              <Button variant="primaryGreen">
                {stringData(langData.SaibaMais)}
              </Button>
            </div>
          </div>
          <div className="col-span-4">
            <img
              src="/img/bg-aboutus.png"
              alt="bg"
              className="md:translate-x-10 md:scale-110"
            />
          </div>
        </div>
        <div className="col-span-4">
          <img
            src="/img/acai.png"
            alt="bg"
            className="absolute -bottom-5 w-[80px] md:-bottom-10 left-0"
          />
        </div>
      </section>
    </Container>
  )
}
