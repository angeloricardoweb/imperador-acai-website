'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getProducts = async () => {
  const lang = await getCurrentLang()
  const data = await client.getAllByType('produto', {
    lang: lang ?? 'pt-br',
  })
  return data
}
