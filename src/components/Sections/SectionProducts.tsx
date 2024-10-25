import React from 'react'
import SwiperProducts from '../Swipers/SwiperProducts'
import { Container } from '../Partials/Container'
import { getProducts } from '@/services/prismicData/getProducts'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'

export default async function SectionProducts() {
  const { stringData } = useLang()
  const data = await getProducts()

  if (!data) return null

  return (
    <section className="bg-[url('/img/bg-products.png')] bg-cover">
      <Container>
        <div className="py-10">
          <h2 className="text-center text-white font-bold text-7xl">
            {stringData(langData.SaudeParaSuaVida)}
          </h2>
          <SwiperProducts products={data} />
        </div>
      </Container>
    </section>
  )
}
