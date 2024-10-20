'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getCertifications = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('certificacoes', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
