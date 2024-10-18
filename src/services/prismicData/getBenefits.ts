'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getBenefits = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('beneficios_do_acai', {
    lang: lang ?? 'pt-br',
  })
  return data
}
