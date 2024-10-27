'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getAboutUsSection = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('quem_somos', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
