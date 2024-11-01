'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { getTestimonials } from '@/services/prismicData/getTestimonials'
import SwiperTestimonials from '../Swipers/SwiperTestimonials'
import useSWR from 'swr'

export default function SectionTestimonials() {
  const { stringData } = useLang()

  const { data } = useSWR('getTestimonials', async () => {
    const response = await getTestimonials()
    return response.data
  })

  if (!data) return null

  return (
    <section className="">
      <Container>
        <div className="py-10 md:py-20">
          <h2 className="text-center font-bold text-5xl md:text-7xl">
            {stringData(langData.Testimonials_)}
          </h2>
          <SwiperTestimonials data={data} />
        </div>
      </Container>
    </section>
  )
}
