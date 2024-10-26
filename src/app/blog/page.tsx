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
        <div className="grid grid-cols-4 gap-5 py-20">
          {isLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="max-w-xs border p-5 shadow">
                <div className="animate-pulse h-40 bg-gray-300"></div>
                <div className="animate-pulse h-4 bg-gray-300 w-1/2 my-2"></div>
                <div className="animate-pulse h-4 bg-gray-300 w-1/4"></div>
              </div>
            ))}
          {data?.map((post) => (
            <Link
              href={`/blog/${post.uid}`}
              key={post.id}
              className="max-w-xs shadow overflow-hidden aspect-square relative rounded-md hover:shadow-xl transition-all duration-300 hover:ring-2 ring-brand-green"
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
