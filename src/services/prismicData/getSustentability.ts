'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getSustentability = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('sustentabilidade', {
    lang: lang ?? 'pt-br',
  })
  return data
}
