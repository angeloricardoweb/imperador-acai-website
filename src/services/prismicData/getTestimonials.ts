'use server'
import { redirect } from 'next/navigation'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getTestimonials = async () => {
  const lang = await getCurrentLang()
  const data = await client
    .getSingle('depoimentos', {
      lang: lang ?? 'pt-br',
    })
    .catch(() => {
      redirect('/404')
    })
  return data
}
