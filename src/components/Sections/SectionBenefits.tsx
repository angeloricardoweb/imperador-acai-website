'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import useSWR from 'swr'
import { getBenefits } from '@/services/prismicData/getBenefits'

export default function SectionBenefits() {
  const {
    data: benefits,
    error,
    isLoading,
  } = useSWR('getBenefits', async () => {
    const response = await getBenefits()
    return response
  })

  const [benefitActive, setBenefitActive] = React.useState<any>({})

  if (error) return null
  if (isLoading)
    return (
      <div>
        <div className="animate-pulse flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md">
          <div className="w-3/4 bg-gray-200 h-6 rounded-lg"></div>
          <div className="w-1/4 bg-gray-200 h-6 rounded-lg"></div>
        </div>
      </div>
    )

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-7xl text-center font-bold">
          {benefits?.data.titulo_da_secao}
        </h2>
        <div className="mt-5 mb-12">
          <p className="text-xl text-center">
            {benefits?.data.descricao_da_secao}
          </p>
        </div>
        <div className="bg-[url('/img/bg-benefits.png')] aspect-[21/6] bg-cover rounded">
          <div className="grid grid-cols-3 gap-5 items-center h-full">
            <div className="h-fit">
              {benefits?.data.beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`${
                      benefitActive?.titulo === beneficio.titulo
                        ? 'w-10'
                        : 'w-5'
                    } transition-all h-1 bg-brand-green rounded-r-full`}
                  ></div>
                  <p
                    className={`cursor-pointer ml-5 ${
                      benefitActive?.titulo === beneficio.titulo
                        ? 'text-white  font-bold'
                        : 'text-zinc-400'
                    }`}
                    onClick={() => setBenefitActive(beneficio)}
                  >
                    {beneficio.titulo}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="mt-5 text-white font-bold text-4xl">
                {benefitActive?.titulo}
              </p>
              <p className="mt-4 text-white">{benefitActive?.descricao}</p>
            </div>
            <div className="px-5 translate-y-10">
              <img src="/img/tigela.png" alt="tigela" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
