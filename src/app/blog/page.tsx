'use client'
import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { getPosts } from '@/services/prismicData/getPosts'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
export const fetchCache = 'force-no-store'

export default function Page() {
  const { stringData } = useLang()
  const { data, isLoading } = useSWR('getPosts', async () => {
    const response = await getPosts()
    return response
  })

  return (
    <main>
      <Subheader title={stringData(langData.Blog)} />
      <Container>
        <div className="my-10">
          <h3 className="text-5xl md:text-7xl text-brand-green text-center font-bold">
            {stringData(langData.ConfiraNossasNovidades)}
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-20">
          {isLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full aspect-square border p-5 shadow"
              ></div>
            ))}
          {data?.map((post) => (
            <Link
              href={`/blog/${post.uid}`}
              key={post.id}
              className="w-full shadow overflow-hidden aspect-square relative rounded-md hover:shadow-xl transition-all duration-300 hover:ring-2 ring-brand-green"
              style={{ backgroundImage: `url(${post.data.capa.url})` }}
            >
              <div className="bg-brand-green w-fit ml-auto mt-5 px-1 rounded-l">
                <small className="text-white">
                  {new Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'short',
                  }).format(new Date(post.first_publication_date))}
                </small>
              </div>
              <div className="mt-auto absolute bottom-6 w-full right-1/2 transform translate-x-1/2 px-5 z-10">
                <p className="text-white text-center text-sm font-bold">
                  {post.data.titulo}
                </p>
              </div>
              <div className="bg-gradient-to-b from-transparent to-black w-full inset-0 absolute" />
              <div className="bg-brand-green w-[90%] absolute bottom-0 right-1/2 transform translate-x-1/2 text-white text-center h-2 rounded-t" />
            </Link>
          ))}
        </div>
      </Container>
    </main>
  )
}
