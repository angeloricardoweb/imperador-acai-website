import { client } from '@/services/prismicClient'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.getAllByType('post')
  const produtos = await client.getAllByType('produto')

  const postsEntries = posts.map((post) => ({
    url: `https://imperadoracai.com/blog/${post.uid}`,
    lastModified: post.last_publication_date,
    changeFrequency: 'weekly',
  }))

  const produtosEntries = produtos.map((produto) => ({
    url: `https://imperadoracai.com/produtos/${produto.uid}`,
    lastModified: produto.last_publication_date,
    changeFrequency: 'weekly',
  }))

  return [
    {
      url: `https://imperadoracai.com/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
    },
    {
      url: `https://imperadoracai.com/quem-somos`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `https://imperadoracai.com/certificacoes`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `https://imperadoracai.com/contatos`,
      lastModified: new Date().toISOString(),
    },
    ...(postsEntries as any),
    ...(produtosEntries as any),
  ]
}
