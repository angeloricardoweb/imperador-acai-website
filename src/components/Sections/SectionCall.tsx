'use client'
import React from 'react'
import { Container } from '../Partials/Container'
import useSWR from 'swr'
import { getInfos } from '@/services/prismicData/getInfos'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { Button } from '../Buttons/Button'
import Link from 'next/link'

export default function SectionCall() {
  const { stringData } = useLang()
  const { data: infos } = useSWR('getInfo', async () => {
    const response = await getInfos()
    return response
  })

  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-center md:justify-between flex-wrap gap-10">
          <div className="flex flex-col items-center gap-3">
            <img src="/img/duvidas.svg" alt="duvidas" className="h-40 w-full" />
            <h2 className="font-bold text-2xl">
              {stringData(langData.Questions)}
            </h2>
            <p className="max-w-sm text-center">
              {stringData(langData.QuestionsDescription)}
            </p>
            {infos?.data.telefone && (
              <p className="text-center font-bold text-2xl">
                {infos?.data.telefone}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              src="/img/revendedor.svg"
              alt="duvidas"
              className="h-40 w-full"
            />
            <h2 className="font-bold text-2xl">
              {stringData(langData.BeARepresentative)}
            </h2>
            <p className="max-w-sm text-center">
              {stringData(langData.BeARepresentativeDescription)}
            </p>
            <Link href={'/fale-conosco'}>
              <Button variant="primaryGreen">Cadastrar</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
