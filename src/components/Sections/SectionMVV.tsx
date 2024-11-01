'use client'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import React from 'react'

export default function SectionMVV({ data }: any) {
  const { stringData } = useLang()

  return (
    <section className="flex justify-center md:justify-between gap-5 flex-wrap my-10 md:my-40 items-center">
      <div className="max-w-[260px] space-y-5">
        <img className="h-40 mx-auto" src="/img/missao.svg" alt="missao" />
        <h3 className="font-bold text-3xl text-center">
          {stringData(langData.mission)}
        </h3>
        <p className="text-center">{data.missao}</p>
      </div>
      <div className="max-w-[260px] space-y-5">
        <img className="h-40" src="/img/visao.svg" alt="visao" />
        <h3 className="font-bold text-3xl text-center">
          {stringData(langData.vision)}
        </h3>
        <p className="text-center">{data.visao}</p>
      </div>
      <div className="max-w-[260px] space-y-5">
        <img className="h-40" src="/img/valores.svg" alt="valores" />
        <h3 className="font-bold text-3xl text-center">
          {stringData(langData.values)}
        </h3>
        <p className="text-center">{data.valores}</p>
      </div>
    </section>
  )
}
