import { client } from '@/services/prismicClient'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.getAllByType('post')
  const produtos = await client.getAllByType('produto')

  const postsEntries = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.uid}`,
    lastModified: post.last_publication_date,
    changeFrequency: 'weekly',
  }))

  const produtosEntries = produtos.map((produto) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/produtos/${produto.uid}`,
    lastModified: produto.last_publication_date,
    changeFrequency: 'weekly',
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/quem-somos`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/certificacoes`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contatos`,
      lastModified: new Date().toISOString(),
    },
    ...(postsEntries as any),
    ...(produtosEntries as any),
  ]
}
