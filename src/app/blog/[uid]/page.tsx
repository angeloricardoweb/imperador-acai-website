import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import ContentRichText from '@/components/Prismic/ContentRichText'
import { getPostDetails } from '@/services/prismicData/getPostDetails'
import { Metadata } from 'next'
import React from 'react'
export const fetchCache = 'force-no-store'

export async function generateMetadata({
  params,
}: {
  params: { uid: string }
}): Promise<Metadata> {
  const post = await getPostDetails(params.uid)

  return {
    title: post.data.titulo,
    description: post.data.resumo,
    openGraph: {
      images: [
        {
          url: post.data.capa.url as string,
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: { uid: string } }) {
  const post = await getPostDetails(params.uid)

  return (
    <main>
      <Subheader title={`Blog`} />
      <Container>
        <div className="py-10">
          <h1 className="font-bold text-3xl">{post.data.titulo}</h1>
          <p>
            {new Intl.DateTimeFormat('pt-BR', {
              dateStyle: 'short',
            }).format(new Date(post.first_publication_date))}{' '}
            - Postado por <strong>{post.data.autor}</strong>
          </p>
          <article className="mt-5">
            {post.data.capa.url && (
              <img
                src={post.data.capa.url}
                alt={post.data.capa.alt ?? 'capa'}
                className="w-full aspect-video object-cover"
              />
            )}
            <div className="mt-5">
              <ContentRichText data={post.data.conteudo} />
            </div>
          </article>
        </div>
      </Container>
    </main>
  )
}
