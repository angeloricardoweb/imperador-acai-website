'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getContactPage = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('fale_conosco', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
