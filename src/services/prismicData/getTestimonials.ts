'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getTestimonials = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('depoimentos', {
    lang: lang ?? 'pt-br',
  })
  return data
}
