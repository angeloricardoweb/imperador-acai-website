'use client'
import React from 'react'
import SwiperProducts from '../Swipers/SwiperProducts'
import { Container } from '../Partials/Container'
import { getProducts } from '@/services/prismicData/getProducts'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import useSWR from 'swr'

export default function SectionProducts() {
  const { stringData } = useLang()

  const { data } = useSWR('getProducts', async () => {
    const response = await getProducts()
    return response
  })

  if (!data) return null

  return (
    <section className="bg-[url('/img/bg-products.png')] bg-cover">
      <Container>
        <div className="py-10">
          <h3 className="text-center text-white font-bold text-5xl md:text-7xl">
            {stringData(langData.SaudeParaSuaVida)}
          </h3>
          <SwiperProducts products={data} />
        </div>
      </Container>
    </section>
  )
}
